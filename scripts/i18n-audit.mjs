#!/usr/bin/env node
// Audits the built site (dist/client) for localization and indexing mistakes.
// Exit code 1 when any error is found. Run after `npm run build`.
//
//   node scripts/i18n-audit.mjs [--dist dist/client] [--only <page-key regex>]
//
// Checks:
//   - <html lang> matches the locale in the URL
//   - noindex ⇔ absent from the sitemap ⇔ absent from every hreflang set
//   - canonical is the absolute URL of the page itself
//   - hreflang sets are reciprocal and x-default points at the English page
//   - internal links on a page stay in that page's locale and resolve to a built page (errors)
//   - English leakage on indexable non-English pages (errors): visible text, alt/title/aria-label/
//     placeholder, title/meta/og, JSON-LD strings, and the data-i18n strings scripts render later.
//       es/pt/fr/de: a text run with 2+ English function words ("the", "with", "your", …)
//       hi/ja:       3+ consecutive Latin-script words that are not brands or technical terms, or a
//                    run of 2+ such words with no Devanagari/Japanese at all
//     Mark content that stays in its original language on purpose with data-i18n-ignore.
import { existsSync } from 'node:fs';
import path from 'node:path';
import { DEFAULT_DIST, listPages, readPage, readSitemapUrls } from './lib/html.mjs';
import { leakIn } from './lib/leakage.mjs';

const SITE = 'https://pixorascreen.com';
const LOCALES = ['es', 'pt', 'fr', 'de', 'hi', 'ja'];
// Pages Cloudflare serves for errors; they are not part of the indexable site.
const ERROR_PAGES = new Set(['404.html', '500.html']);

const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const index = args.indexOf(`--${name}`);
  return index === -1 ? fallback : args[index + 1];
};
const dist = opt('dist', DEFAULT_DIST);
const only = opt('only') ? new RegExp(opt('only')) : null;

const errors = [];
const warnings = [];
const error = (key, message) => errors.push(`${key}: ${message}`);
const warn = (key, message) => warnings.push(`${key}: ${message}`);

const localeOf = (key) => {
  const first = key.split('/')[0];
  return LOCALES.includes(first) ? first : 'en';
};
const urlOf = (key) => `${SITE}/${key === '/' ? '' : key}`;
const keyOfUrl = (url) => {
  const pathname = new URL(url).pathname.replace(/^\//, '');
  return pathname === '' ? '/' : pathname;
};

function builtFileFor(href) {
  const clean = href.split('#')[0].split('?')[0];
  if (clean === '' || clean === '/') return path.join(dist, 'index.html');
  const rel = clean.replace(/^\//, '');
  return rel.endsWith('/') ? path.join(dist, rel, 'index.html') : path.join(dist, rel);
}

const pages = (await listPages(dist)).filter((page) => !ERROR_PAGES.has(page.key));
const records = new Map();
for (const page of pages) records.set(page.key, await readPage(page.file, { copy: true }));
const sitemap = new Set(await readSitemapUrls(dist));
if (!sitemap.size) error('sitemap', 'no URLs found in sitemap.xml / sitemap-0.xml');

const isNoindex = (record) => /noindex/i.test(record.meta.robots ?? '');
// Human-readable strings inside JSON (JSON-LD, data-i18n). Skips URLs, ids, and schema keywords.
const SKIP_JSON_KEYS = new Set(['@context', '@type', '@id', 'url', 'item', 'image', 'logo', 'sameAs', 'inLanguage', 'applicationCategory', 'operatingSystem', 'priceCurrency', 'price', 'dateModified', 'datePublished', 'contentUrl', 'thumbnailUrl', 'target', 'query-input', 'email']);
function jsonStrings(value, key = '') {
  if (typeof value === 'string') return SKIP_JSON_KEYS.has(key) || /^(https?:|\/|#|mailto:)/.test(value) ? [] : [value];
  if (Array.isArray(value)) return value.flatMap((item) => jsonStrings(item, key));
  if (value && typeof value === 'object') return Object.entries(value).flatMap(([k, v]) => jsonStrings(v, k));
  return [];
}

for (const [key, record] of records) {
  if (only && !only.test(key)) continue;
  const locale = localeOf(key);
  const url = urlOf(key);
  const noindex = isNoindex(record);

  if (record.lang !== locale) error(key, `<html lang="${record.lang}"> but URL locale is ${locale}`);
  if (record.canonical !== url) error(key, `canonical ${record.canonical} is not the page's own URL ${url}`);

  // Indexing consistency.
  if (noindex && sitemap.has(url)) error(key, 'noindex page is listed in the sitemap');
  if (!noindex && !sitemap.has(url)) error(key, 'indexable page is missing from the sitemap');
  if (noindex && record.hreflang.length) error(key, 'noindex page declares hreflang alternates');

  // hreflang reciprocity.
  const alternates = record.hreflang.map((entry) => {
    const [lang, href] = entry.split(' ');
    return { lang, href };
  });
  if (alternates.length) {
    const self = alternates.find((alternate) => alternate.href === url);
    if (!self) error(key, 'hreflang set does not include the page itself');
    const xDefault = alternates.find((alternate) => alternate.lang === 'x-default');
    const en = alternates.find((alternate) => alternate.lang === 'en');
    if (!xDefault || !en || xDefault.href !== en.href) error(key, 'x-default must point at the English alternate');
    for (const alternate of alternates) {
      if (alternate.lang === 'x-default') continue;
      const target = records.get(keyOfUrl(alternate.href));
      if (!target) {
        error(key, `hreflang ${alternate.lang} → ${alternate.href} is not a built page`);
        continue;
      }
      if (isNoindex(target)) error(key, `hreflang ${alternate.lang} → ${alternate.href} points at a noindex page`);
      if (!target.hreflang.some((entry) => entry.endsWith(` ${url}`))) error(key, `hreflang ${alternate.lang} → ${alternate.href} is not reciprocal`);
    }
  }

  // Internal links stay in-locale and resolve.
  for (const href of record.hrefs) {
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    if (href.startsWith('/_astro/') || href.startsWith('/assets/')) continue;
    if (!existsSync(builtFileFor(href))) {
      error(key, `link ${href} does not resolve to a built page`);
      continue;
    }
    const target = href.replace(/^\//, '').split('#')[0] || '/';
    const targetLocale = localeOf(target);
    if (targetLocale !== locale) error(key, `link ${href} leaves the ${locale} locale`);
  }

  // English leakage: only on pages Google indexes; drafts are allowed to be partly English.
  if (locale !== 'en' && !noindex) {
    const runs = [
      ...record.copy,
      record.title ?? '',
      ...Object.entries(record.meta).filter(([name]) => ['description', 'twitter:title', 'twitter:description', 'twitter:image:alt'].includes(name)).map(([, value]) => value),
      ...Object.entries(record.og).filter(([name]) => /^og:(title|description|site_name|image:alt)$/.test(name)).flatMap(([, value]) => value),
      ...record.jsonld.flatMap(jsonStrings),
      ...record.dataI18n.flatMap((raw) => {
        try {
          return jsonStrings(JSON.parse(raw));
        } catch {
          return [raw];
        }
      }),
    ];
    const seen = new Set();
    for (const run of runs) {
      if (seen.has(run)) continue;
      seen.add(run);
      const leak = leakIn(run, locale);
      if (leak) error(key, `English text on an indexable ${locale} page: "${run.slice(0, 140)}"${leak === true ? '' : ` (${leak})`}`);
    }
  }
}

for (const url of sitemap) {
  const key = keyOfUrl(url);
  if (!records.has(key)) error('sitemap', `${url} is not a built page`);
}

const warningCounts = warnings.length;
if (process.argv.includes('--verbose')) for (const line of warnings) console.log(`warn  ${line}`);
for (const line of errors) console.log(`error ${line}`);
console.log(
  `\ni18n audit: ${records.size} pages, ${sitemap.size} sitemap URLs — ${errors.length} errors, ${warningCounts} warnings` +
    (warningCounts && !process.argv.includes('--verbose') ? ' (run with --verbose to list warnings)' : ''),
);
process.exitCode = errors.length ? 1 : 0;
