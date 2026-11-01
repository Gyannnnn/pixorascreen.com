// Shared helpers for the i18n snapshot and audit scripts: walk the built site and
// pull the SEO-relevant facts out of each HTML page.
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { parse, ELEMENT_NODE, TEXT_NODE } from 'ultrahtml';

export const DEFAULT_DIST = 'dist/client';

const SKIP_DIRS = new Set(['_astro', 'assets', 'boot']);
// Subtrees whose text a visitor never reads as page copy.
const HIDDEN_TAGS = new Set(['script', 'style', 'template', 'noscript', 'svg', 'head']);
const TEXT_ATTRS = ['alt', 'title', 'aria-label', 'placeholder'];

const NAMED_ENTITIES = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', mdash: '—', ndash: '–',
  hellip: '…', rarr: '→', larr: '←', uarr: '↑', darr: '↓', copy: '©', reg: '®', trade: '™',
  middot: '·', times: '×', deg: '°', bull: '•', lsquo: '‘', rsquo: '’',
  ldquo: '“', rdquo: '”', laquo: '«', raquo: '»',
};

export function decodeEntities(value) {
  return value.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, code) => {
    if (code[0] === '#') {
      const n = code[1] === 'x' || code[1] === 'X' ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
      return Number.isFinite(n) ? String.fromCodePoint(n) : match;
    }
    return NAMED_ENTITIES[code.toLowerCase()] ?? match;
  });
}

const squash = (value) => decodeEntities(value).replace(/\s+/g, ' ').trim();

export async function listPages(dist = DEFAULT_DIST) {
  const pages = [];
  async function visit(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (!SKIP_DIRS.has(entry.name)) await visit(full);
      } else if (entry.name.endsWith('.html')) {
        const rel = path.relative(dist, full).split(path.sep).join('/');
        pages.push({ file: full, key: rel.endsWith('index.html') ? rel.slice(0, -'index.html'.length) || '/' : rel });
      }
    }
  }
  await visit(dist);
  return pages.sort((a, b) => a.key.localeCompare(b.key));
}

function textOf(node) {
  if (node.type === TEXT_NODE) return node.value;
  if (node.type !== ELEMENT_NODE && node.type !== 0) return '';
  if (node.type === ELEMENT_NODE && HIDDEN_TAGS.has(node.name)) return '';
  return (node.children ?? []).map(textOf).join(' ');
}

function sortKeys(value) {
  if (Array.isArray(value)) return value.map(sortKeys);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, sortKeys(value[key])]));
  }
  return value;
}

/**
 * Extract the facts the snapshot/audit compare. `text` is a list of visible text runs.
 * With `{ copy: true }` the record also gets `copy`: visible text runs and text attributes outside
 * subtrees that are in another language on purpose: `data-i18n-ignore` (source code), `translate="no"`
 * (the brand wordmark), a `lang` attribute other than the page's (language names in the switcher),
 * or `<code>`/`<pre>` (literal identifiers such as file names and hex codes; the lint skips Markdown
 * code spans the same way).
 * The audit's English-leakage check reads it; snapshots leave it out.
 */
export function extractPage(html, { copy = false } = {}) {
  // ultrahtml ends a tag at the first ">", even inside a quoted attribute value (valid HTML;
  // Astro leaves ">" unescaped in data-i18n JSON). Escape angle brackets inside double-quoted
  // attribute values so the tree matches what a browser builds.
  const doc = parse(html.replace(/(<[a-zA-Z][^\s>/]*)((?:\s+[^\s=>/]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'>]+))?)*)(\s*\/?>)/g, (_, open, attrs, close) =>
    open + attrs.replace(/"[^"]*"/g, (value) => value.replace(/</g, '&lt;').replace(/>/g, '&gt;')) + close));
  const record = {
    lang: null,
    title: null,
    meta: {},
    og: {},
    canonical: null,
    hreflang: [],
    jsonld: [],
    h1: [],
    headings: [],
    text: [],
    attrText: [],
    hrefs: [],
    dataI18n: [],
  };
  if (copy) record.copy = [];

  const isForeign = (name, attrs) =>
    name === 'code' || name === 'pre' ||
    attrs['data-i18n-ignore'] !== undefined || attrs.translate === 'no' || (name !== 'html' && attrs.lang !== undefined && attrs.lang !== record.lang);

  function visit(node, hidden, ignored) {
    if (node.type === TEXT_NODE) {
      if (!hidden) {
        const value = squash(node.value);
        if (value) record.text.push(value);
        if (value && copy && !ignored) record.copy.push(value);
      }
      return;
    }
    if (node.type !== ELEMENT_NODE) {
      for (const child of node.children ?? []) visit(child, hidden, ignored);
      return;
    }
    const { name, attributes: attrs = {} } = node;
    if (name === 'html') record.lang = attrs.lang ?? null;
    if (name === 'title' && record.title === null) record.title = squash(textOf({ ...node, name: 'span' }));
    if (name === 'meta') {
      if (attrs.name) record.meta[attrs.name] = squash(attrs.content ?? '');
      if (attrs.property) {
        const key = attrs.property;
        const value = squash(attrs.content ?? '');
        record.og[key] = record.og[key] === undefined ? value : [].concat(record.og[key], value);
      }
    }
    if (name === 'link' && attrs.rel === 'canonical') record.canonical = attrs.href ?? null;
    if (name === 'link' && attrs.rel === 'alternate' && attrs.hreflang) record.hreflang.push(`${attrs.hreflang} ${attrs.href}`);
    if (name === 'script' && attrs.type === 'application/ld+json') {
      const raw = (node.children ?? []).map((child) => child.value ?? '').join('');
      try {
        record.jsonld.push(sortKeys(JSON.parse(raw)));
      } catch {
        record.jsonld.push({ __invalid: raw.slice(0, 200) });
      }
    }
    if (attrs['data-i18n'] !== undefined) record.dataI18n.push(decodeEntities(attrs['data-i18n']));
    if (!hidden) {
      if (name === 'h1') record.h1.push(squash(textOf(node)));
      if (/^h[2-3]$/.test(name)) record.headings.push(`${name}: ${squash(textOf(node))}`);
      if (name === 'a' && attrs.href !== undefined) record.hrefs.push(attrs.href);
      const childIgnored = ignored || isForeign(name, attrs);
      for (const attr of TEXT_ATTRS) {
        if (attrs[attr]) record.attrText.push(`${attr}: ${squash(attrs[attr])}`);
        if (attrs[attr] && copy && !childIgnored) record.copy.push(squash(attrs[attr]));
      }
    }
    const childHidden = hidden || HIDDEN_TAGS.has(name);
    for (const child of node.children ?? []) visit(child, childHidden, ignored || isForeign(name, attrs));
  }

  visit(doc, false, false);
  record.hreflang.sort();
  return record;
}

export async function readPage(file, options) {
  return extractPage(await readFile(file, 'utf8'), options);
}

/** Sitemap <loc> values from every sitemap file in the build. */
export async function readSitemapUrls(dist = DEFAULT_DIST) {
  const urls = new Set();
  for (const name of ['sitemap.xml', 'sitemap-0.xml']) {
    try {
      const xml = await readFile(path.join(dist, name), 'utf8');
      for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
        if (!match[1].endsWith('.xml')) urls.add(match[1].trim());
      }
    } catch {
      // A missing sitemap file is reported by the audit, not here.
    }
  }
  return [...urls].sort();
}
