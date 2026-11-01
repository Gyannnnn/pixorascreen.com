#!/usr/bin/env node
// Record or compare the SEO-visible state of every built page.
//
//   node scripts/i18n-snapshot.mjs <name>                 snapshot dist/client → .i18n-snapshots/<name>.json
//   node scripts/i18n-snapshot.mjs --diff <a> <b>         compare two snapshots (exit 1 on any difference)
//
// Diff options: --filter <regex> (page keys), --fields title,text,... , --max <n> lines per field.
import { mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { DEFAULT_DIST, listPages, readPage, readSitemapUrls } from './lib/html.mjs';

const SNAPSHOT_DIR = '.i18n-snapshots';
const args = process.argv.slice(2);

function option(name, fallback) {
  const index = args.indexOf(`--${name}`);
  if (index === -1) return fallback;
  const value = args[index + 1];
  args.splice(index, 2);
  return value;
}

async function jsBytes(dist) {
  let total = 0;
  try {
    for (const name of await readdir(path.join(dist, '_astro'))) {
      if (name.endsWith('.js')) total += (await stat(path.join(dist, '_astro', name))).size;
    }
  } catch {
    // No client JS emitted.
  }
  return total;
}

async function snapshot(name, dist) {
  const pages = {};
  for (const page of await listPages(dist)) pages[page.key] = await readPage(page.file);
  const data = {
    createdAt: new Date().toISOString(),
    dist,
    htmlCount: Object.keys(pages).length,
    jsBytes: await jsBytes(dist),
    sitemap: await readSitemapUrls(dist),
    pages,
  };
  await mkdir(SNAPSHOT_DIR, { recursive: true });
  const out = path.join(SNAPSHOT_DIR, `${name}.json`);
  await writeFile(out, JSON.stringify(data, null, 1));
  console.log(`snapshot ${out}: ${data.htmlCount} pages, ${data.sitemap.length} sitemap URLs, ${data.jsBytes} JS bytes`);
}

const load = async (name) => JSON.parse(await readFile(name.endsWith('.json') ? name : path.join(SNAPSHOT_DIR, `${name}.json`), 'utf8'));

/** Line diff of two lists via longest common subsequence, so one insertion does not shift every later entry. */
function listDiff(a = [], b = [], max) {
  const left = a.map((item) => JSON.stringify(item));
  const right = b.map((item) => JSON.stringify(item));
  const n = left.length;
  const m = right.length;
  const lcs = Array.from({ length: n + 1 }, () => new Uint32Array(m + 1));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      lcs[i][j] = left[i] === right[j] ? lcs[i + 1][j + 1] + 1 : Math.max(lcs[i + 1][j], lcs[i][j + 1]);
    }
  }
  const lines = [];
  let i = 0;
  let j = 0;
  while ((i < n || j < m) && lines.length < max) {
    if (i < n && j < m && left[i] === right[j]) {
      i++;
      j++;
    } else if (j < m && (i === n || lcs[i][j + 1] >= lcs[i + 1][j])) {
      lines.push(`    + [${j}] ${right[j].slice(0, 220)}`);
      j++;
    } else {
      lines.push(`    - [${i}] ${left[i].slice(0, 220)}`);
      i++;
    }
  }
  return lines;
}

async function diff(aName, bName, filter, fields, max) {
  const [a, b] = [await load(aName), await load(bName)];
  const keys = [...new Set([...Object.keys(a.pages), ...Object.keys(b.pages)])].sort().filter((key) => !filter || filter.test(key));
  let changedPages = 0;
  const fieldCounts = {};

  for (const key of keys) {
    const left = a.pages[key];
    const right = b.pages[key];
    if (!left || !right) {
      changedPages++;
      console.log(`${left ? 'REMOVED' : 'ADDED'} ${key}`);
      continue;
    }
    const changed = Object.keys({ ...left, ...right })
      .filter((field) => !fields || fields.includes(field))
      .filter((field) => JSON.stringify(left[field]) !== JSON.stringify(right[field]));
    if (!changed.length) continue;
    changedPages++;
    console.log(`CHANGED ${key}`);
    for (const field of changed) {
      fieldCounts[field] = (fieldCounts[field] ?? 0) + 1;
      console.log(`  ${field}:`);
      const l = left[field];
      const r = right[field];
      if (Array.isArray(l) || Array.isArray(r)) console.log(listDiff(l, r, max).join('\n'));
      else console.log(`    - ${JSON.stringify(l)?.slice(0, 400)}\n    + ${JSON.stringify(r)?.slice(0, 400)}`);
    }
  }

  const sitemapAdded = b.sitemap.filter((url) => !a.sitemap.includes(url));
  const sitemapRemoved = a.sitemap.filter((url) => !b.sitemap.includes(url));
  console.log('\nSUMMARY');
  console.log(`  pages compared: ${keys.length}, changed: ${changedPages}`);
  console.log(`  fields changed: ${JSON.stringify(fieldCounts)}`);
  console.log(`  sitemap: ${a.sitemap.length} → ${b.sitemap.length} (+${sitemapAdded.length} / -${sitemapRemoved.length})`);
  console.log(`  JS bytes: ${a.jsBytes} → ${b.jsBytes} (${(((b.jsBytes - a.jsBytes) / (a.jsBytes || 1)) * 100).toFixed(1)}%)`);
  process.exitCode = changedPages ? 1 : 0;
}

const filterSource = option('filter');
const fieldsSource = option('fields');
const max = Number(option('max', '12'));
const dist = option('dist', DEFAULT_DIST);
const diffIndex = args.indexOf('--diff');

if (diffIndex !== -1) {
  const [aName, bName] = args.slice(diffIndex + 1);
  if (!aName || !bName) throw new Error('usage: --diff <a> <b>');
  await diff(aName, bName, filterSource ? new RegExp(filterSource) : null, fieldsSource?.split(','), max);
} else {
  if (!args[0]) throw new Error('usage: i18n-snapshot.mjs <name>');
  await snapshot(args[0], dist);
}
