#!/usr/bin/env node
// Source-level localization checks (no build needed). Exit code 1 on any error.
//
//   node scripts/i18n-lint.mjs [--verbose]
//
// UI catalogs (src/i18n/ui/*.ts):
//   - keys a locale defines that English does not (error)
//   - {param} placeholders that differ from English (error)
//   - values identical to English (warning; fine for brand names and codes)
//   - values with untranslated English in them (error; see scripts/lib/leakage.mjs)
//   - French: an ordinary space before : ; ! ? or inside « » (error; node scripts/i18n-fr-spaces.mjs fixes it)
//   - values without a stamp, or stamped from an older English value (error): src/i18n/ui/stamps/<locale>.json
//     records the English each string was translated from; npm run i18n:stamp -- --ui <locale> writes it
// Code:
//   - t(locale, 'ns.key') literals that English does not define (error)
//   - client strings read as text.key (scripts) or ui.key (React islands) from a namespace that lacks the key (error)
// Content (src/content/tools|pages/<locale>/*.md, non-English):
//   - frontmatter keys, FAQ/shortcut/chip counts, and H2/H3 counts that differ from English (error)
//   - a different set of tool:/page:/home: link tokens than English (error)
//   - raw internal links "](/", or raw HTML other than <kbd> and <br> (error)
//   - status: complete without a sourceHash, or with one that no longer matches English (error)
//   - text length far outside the expected ratio to English (error when complete)
//   - untranslated English in frontmatter text or body paragraphs (error when complete)
//   - French no-break spaces, as for the catalogs (error when complete)
import { existsSync } from 'node:fs';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { load as yamlLoad } from 'js-yaml';
import { sourceHashOf, stringHashOf } from './lib/hash.mjs';
import { leakIn } from './lib/leakage.mjs';
import { fixFrench } from './i18n-fr-spaces.mjs';

const LOCALES = ['es', 'pt', 'fr', 'de', 'hi', 'ja'];
const verbose = process.argv.includes('--verbose');
const errors = [];
const warnings = [];
const error = (where, message) => errors.push(`${where}: ${message}`);
const warn = (where, message) => warnings.push(`${where}: ${message}`);

// ---------- catalogs ----------
async function loadCatalog(locale) {
  const mod = await import(path.resolve(`src/i18n/ui/${locale}.ts`));
  return mod[locale];
}
const placeholders = (value) => [...value.matchAll(/\{([a-z_]+)\}/g)].map((m) => m[1]).sort().join(',');

const en = await loadCatalog('en');
for (const locale of LOCALES) {
  const catalog = await loadCatalog(locale);
  const file = `src/i18n/ui/${locale}.ts`;
  const stampFile = `src/i18n/ui/stamps/${locale}.json`;
  const stamps = existsSync(stampFile) ? JSON.parse(await readFile(stampFile, 'utf8')) : {};
  let unstamped = 0;
  const stale = [];
  for (const [key, value] of Object.entries(catalog)) {
    if (!(key in en)) {
      error(file, `unknown key "${key}"`);
      continue;
    }
    if (placeholders(value) !== placeholders(en[key])) error(file, `"${key}" placeholders {${placeholders(value)}} differ from English {${placeholders(en[key])}}`);
    if (value === en[key] && /[a-z]{3}/i.test(value)) warn(file, `"${key}" is identical to English`);
    else {
      const leak = leakIn(value, locale);
      if (leak) error(file, `"${key}" has untranslated English (${leak}): ${JSON.stringify(value.slice(0, 120))}`);
    }
    if (locale === 'fr' && fixFrench(value) !== value) error(file, `"${key}" needs a no-break space before : ; ! ? or inside « » (run node scripts/i18n-fr-spaces.mjs)`);
    if (!stamps[key]) unstamped++;
    else if (stamps[key] !== stringHashOf(en[key])) stale.push(key);
  }
  if (unstamped) error(file, `${unstamped} strings have no stamp (after translating, run npm run i18n:stamp -- --ui ${locale})`);
  for (const key of stale) error(file, `"${key}" is stale: the English string changed after it was translated (re-translate it, then npm run i18n:stamp -- --ui ${locale} --keys ${key})`);
  for (const key of Object.keys(stamps)) if (!(key in catalog)) error(stampFile, `stamp for "${key}", which ${locale}.ts does not define (re-run the stamp)`);
}

// ---------- code ----------
async function walk(dir, out = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, out);
    else if (/\.(astro|ts|tsx|js)$/.test(entry.name)) out.push(full);
  }
  return out;
}
const codeFiles = (await walk('src')).filter((file) => !file.startsWith(path.join('src', 'i18n', 'ui')));
const namespaceKeys = (namespace) => new Set(Object.keys(en).filter((key) => key.startsWith(`${namespace}.`)).map((key) => key.slice(namespace.length + 1)));

for (const file of codeFiles) {
  const source = await readFile(file, 'utf8');
  for (const match of source.matchAll(/\bt\(\s*[^,()]+,\s*'([a-z_]+\.[a-z0-9_.-]+)'/g)) {
    if (!(match[1] in en)) error(file, `t() key "${match[1]}" is not defined in en.ts`);
  }
  // Client-side namespaces: strings(locale, 'ns') passed to a script or island.
  const used = [...source.matchAll(/strings\(\s*[^,()]+,\s*'([a-z_]+)'\s*\)/g)].map((m) => m[1]);
  if (!used.length) continue;
  const keys = new Set(used.flatMap((namespace) => [...namespaceKeys(namespace)]));
  for (const match of source.matchAll(/\b(?:text|T)\??\.([a-z][a-z0-9_]*)\b/g)) {
    if (['length', 'replace', 'split', 'trim'].includes(match[1])) continue;
    if (!keys.has(match[1])) error(file, `client string "${match[1]}" is not in namespace(s) ${used.join(', ')}`);
  }
}
// React islands read their strings in the .tsx file, while the namespace is chosen in the .astro wrapper.
const islandNamespaces = {};
for (const file of codeFiles.filter((f) => f.endsWith('.astro'))) {
  const source = await readFile(file, 'utf8');
  for (const match of source.matchAll(/<(?:React)?([A-Z][A-Za-z]+)\b[^>]*strings=\{strings\(\s*[^,()]+,\s*'([a-z_]+)'\s*\)\}/g)) {
    (islandNamespaces[match[1]] ??= new Set()).add(match[2]);
  }
}
for (const [component, namespaces] of Object.entries(islandNamespaces)) {
  const file = path.join('src', 'components', `${component}.tsx`);
  if (!existsSync(file)) continue;
  const source = await readFile(file, 'utf8');
  const keys = new Set([...namespaces].flatMap((namespace) => [...namespaceKeys(namespace)]));
  for (const match of source.matchAll(/\bui\??\.([a-z][a-z0-9_]*)\b/g)) {
    if (['length', 'replace', 'split', 'trim'].includes(match[1])) continue;
    if (!keys.has(match[1])) error(file, `island string "${match[1]}" is not in namespace(s) ${[...namespaces].join(', ')}`);
  }
}

// ---------- content ----------
function splitFile(source, file) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`${file}: missing frontmatter`);
  return { data: yamlLoad(match[1]) ?? {}, body: match[2] };
}
const headingCount = (body, level) => (body.match(new RegExp(`^${'#'.repeat(level)} `, 'gm')) ?? []).length;
// Reader-facing frontmatter strings and body paragraphs, with Markdown syntax and link targets removed.
const frontmatterText = (data) =>
  [data.title, data.description, data.h1, data.breadcrumb, data.appDescription, data.lede, ...(data.chips ?? []),
    ...(data.shortcuts ?? []).map((s) => s.label), ...(data.faqs ?? []).flatMap((f) => [f.q, f.a])].filter(Boolean);
const bodyText = (body) =>
  body
    .replace(/```[\s\S]*?```/g, '')
    .split(/\n{2,}|\n(?=[-*|#>]|\d+\.)/)
    .map((block) => block.replace(/\]\([^)]*\)/g, ']').replace(/<kbd>[^<]*<\/kbd>/g, ' ').replace(/<[^>]+>|`[^`]*`|[#*_>|]/g, ' ').trim())
    .filter(Boolean);
const tokens = (body) => [...body.matchAll(/\]\(((?:tool|page|home):[^)\s]*)\)/g)].map((m) => m[1]).sort().join(' ');
const visibleLength = (body) => body.replace(/\]\([^)]*\)/g, ']').replace(/<[^>]+>/g, '').replace(/[#*`>|_-]/g, '').replace(/\s+/g, '').length;
// Characters per English character, by script. Generous bands: they catch abridged or untranslated files.
const RATIO = { es: [0.9, 1.6], pt: [0.9, 1.6], fr: [0.9, 1.7], de: [0.9, 1.7], hi: [0.75, 1.6], ja: [0.25, 0.75] };

for (const collection of ['tools', 'pages']) {
  const enDir = path.join('src/content', collection, 'en');
  for (const name of (await readdir(enDir)).filter((file) => file.endsWith('.md'))) {
    const enSource = await readFile(path.join(enDir, name), 'utf8');
    const english = splitFile(enSource, name);
    for (const locale of LOCALES) {
      const file = path.join('src/content', collection, locale, name);
      if (!existsSync(file)) continue;
      const { data, body } = splitFile(await readFile(file, 'utf8'), file);
      if (data.status !== 'complete') continue;
      const enKeys = Object.keys(english.data).filter((key) => key !== 'sourceHash').sort().join(',');
      const keys = Object.keys(data).filter((key) => key !== 'sourceHash').sort().join(',');
      if (keys !== enKeys) error(file, `frontmatter keys [${keys}] differ from English [${enKeys}]`);
      for (const list of ['faqs', 'shortcuts', 'chips']) {
        if ((english.data[list]?.length ?? 0) !== (data[list]?.length ?? 0)) error(file, `${list}: ${data[list]?.length ?? 0} entries, English has ${english.data[list]?.length ?? 0}`);
      }
      for (const level of [2, 3]) {
        if (headingCount(english.body, level) !== headingCount(body, level)) error(file, `H${level} count ${headingCount(body, level)} differs from English ${headingCount(english.body, level)}`);
      }
      if (tokens(english.body) !== tokens(body)) error(file, `link tokens differ from English:\n    en: ${tokens(english.body)}\n    ${locale}: ${tokens(body)}`);
      if (/\]\(\//.test(body)) error(file, 'raw internal link "](/"; use a tool:/page:/home: token');
      for (const tag of body.matchAll(/<\/?([a-zA-Z][a-zA-Z0-9]*)[^>]*>/g)) {
        if (!['kbd', 'br'].includes(tag[1].toLowerCase())) error(file, `raw HTML <${tag[1]}> is not allowed`);
      }
      if (!data.sourceHash) error(file, 'status: complete but no sourceHash (run npm run i18n:stamp)');
      else if (data.sourceHash !== sourceHashOf(enSource)) error(file, 'stale: English changed since this translation (re-translate, then npm run i18n:stamp)');
      const ratio = visibleLength(body) / Math.max(1, visibleLength(english.body));
      const [low, high] = RATIO[locale];
      if (ratio < low || ratio > high) error(file, `body length is ${ratio.toFixed(2)}× English (expected ${low}–${high}×): abridged or untranslated?`);
      if (locale === 'fr' && fixFrench(body) !== body) error(file, 'needs no-break spaces before : ; ! ? or inside « » (run node scripts/i18n-fr-spaces.mjs)');
      for (const text of [...frontmatterText(data), ...bodyText(body)]) {
        const leak = leakIn(text, locale);
        if (leak) error(file, `untranslated English (${leak}): ${JSON.stringify(text.slice(0, 120))}`);
      }
    }
  }
}

if (verbose) for (const line of warnings) console.log(`warn  ${line}`);
for (const line of errors) console.log(`error ${line}`);
console.log(`\ni18n lint: ${errors.length} errors, ${warnings.length} warnings${warnings.length && !verbose ? ' (--verbose to list)' : ''}`);
process.exitCode = errors.length ? 1 : 0;
