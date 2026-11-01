#!/usr/bin/env node
// Measures templated content across the English tool articles (src/content/tools/en/*.md).
// A "shared phrase" is an 8-word run that appears in more than 2 tools' text (article body,
// lede and FAQ answers). Pages built from the same template light up here.
//
//   node scripts/content-audit.mjs            report per-tool word count and shared-phrase share
//   node scripts/content-audit.mjs --strict   also exit 1 when a tool exceeds the limits below
//   node scripts/content-audit.mjs --phrases  list the most widely shared phrases
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { load as yamlLoad } from 'js-yaml';

const DIR = 'src/content/tools/en';
const SHINGLE = 8;
const MAX_PAGES_PER_PHRASE = 2;
// Limits enforced with --strict (end of M3).
const MAX_SHARED_SHARE = 0.05;
const MIN_ARTICLE_WORDS = 400;

const args = process.argv.slice(2);

function plain(markdown) {
  return markdown
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*`_>\\|-]/g, ' ');
}

const words = (text) => text.toLowerCase().match(/[\p{L}\p{N}']+/gu) ?? [];

function shingles(tokens) {
  const set = new Set();
  for (let i = 0; i + SHINGLE <= tokens.length; i++) set.add(tokens.slice(i, i + SHINGLE).join(' '));
  return set;
}

const pages = [];
for (const name of (await readdir(DIR)).filter((file) => file.endsWith('.md')).sort()) {
  const source = await readFile(path.join(DIR, name), 'utf8');
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`${name}: missing frontmatter`);
  const data = yamlLoad(match[1]);
  const body = plain(match[2]);
  const faqText = (data.faqs ?? []).map((faq) => `${faq.q} ${faq.a}`).join(' \n ');
  const allTokens = words(`${data.lede}\n${body}\n${faqText}`);
  pages.push({
    id: name.slice(0, -3),
    articleWords: words(body).length,
    faqs: (data.faqs ?? []).length,
    shingles: shingles(allTokens),
  });
}

const owners = new Map();
for (const page of pages) {
  for (const shingle of page.shingles) {
    if (!owners.has(shingle)) owners.set(shingle, new Set());
    owners.get(shingle).add(page.id);
  }
}

const failures = [];
const rows = pages.map((page) => {
  let shared = 0;
  for (const shingle of page.shingles) if (owners.get(shingle).size > MAX_PAGES_PER_PHRASE) shared++;
  const share = page.shingles.size ? shared / page.shingles.size : 0;
  if (share > MAX_SHARED_SHARE) failures.push(`${page.id}: ${(share * 100).toFixed(1)}% of its text is shared with 3+ other tools (limit ${MAX_SHARED_SHARE * 100}%)`);
  if (page.articleWords < MIN_ARTICLE_WORDS) failures.push(`${page.id}: article has ${page.articleWords} words (minimum ${MIN_ARTICLE_WORDS})`);
  return { ...page, share };
});

console.log('tool                     words  faqs  shared');
for (const row of rows.sort((a, b) => b.share - a.share)) {
  console.log(`${row.id.padEnd(24)} ${String(row.articleWords).padStart(5)} ${String(row.faqs).padStart(5)} ${(row.share * 100).toFixed(1).padStart(6)}%`);
}
const average = rows.reduce((sum, row) => sum + row.share, 0) / rows.length;
console.log(`\naverage shared share: ${(average * 100).toFixed(1)}% across ${rows.length} tools; ${rows.filter((row) => row.share > MAX_SHARED_SHARE).length} over the ${MAX_SHARED_SHARE * 100}% limit`);

if (args.includes('--phrases')) {
  const widest = [...owners.entries()].filter(([, set]) => set.size > MAX_PAGES_PER_PHRASE).sort((a, b) => b[1].size - a[1].size).slice(0, 25);
  console.log('\nmost widely shared phrases:');
  for (const [phrase, set] of widest) console.log(`  ${String(set.size).padStart(2)} tools: "${phrase}"`);
}

if (args.includes('--strict') && failures.length) {
  for (const failure of failures) console.log(`error ${failure}`);
  process.exitCode = 1;
}
