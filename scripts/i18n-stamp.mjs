#!/usr/bin/env node
// Records which English text a translation was made from, so the lint can flag it as stale
// when the English changes later. Run it only after the translation is finished and reviewed.
//
//   npm run i18n:stamp -- <tool-id> [--locale hi]        tools: sets sourceHash + status: complete
//   npm run i18n:stamp -- --page about [--locale hi]     pages collection (about, privacy)
//   npm run i18n:stamp -- --ui hi [--keys a.b,c.d | --ns nav,footer]
//                                                        UI strings: src/i18n/ui/stamps/hi.json
//
// Without --locale, a Markdown stamp applies to every locale that has the file.
import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { sourceHashOf, stringHashOf } from './lib/hash.mjs';

const LOCALES = ['es', 'pt', 'fr', 'de', 'hi', 'ja'];
const args = process.argv.slice(2);
const opt = (name) => {
  const index = args.indexOf(`--${name}`);
  return index === -1 ? undefined : args[index + 1];
};
const fail = (message) => {
  console.error(`i18n:stamp: ${message}`);
  process.exit(1);
};

async function stampMarkdown(collection, id, locales) {
  const enFile = path.join('src/content', collection, 'en', `${id}.md`);
  if (!existsSync(enFile)) fail(`${enFile} does not exist`);
  const hash = sourceHashOf(await readFile(enFile, 'utf8'));
  for (const locale of locales) {
    const file = path.join('src/content', collection, locale, `${id}.md`);
    if (!existsSync(file)) {
      console.log(`skip  ${file} (missing)`);
      continue;
    }
    const source = await readFile(file, 'utf8');
    const match = source.match(/^---\n([\s\S]*?)\n---\n/);
    if (!match) fail(`${file}: missing frontmatter`);
    let front = match[1];
    front = /^status:.*$/m.test(front) ? front.replace(/^status:.*$/m, 'status: complete') : `status: complete\n${front}`;
    front = /^sourceHash:.*$/m.test(front) ? front.replace(/^sourceHash:.*$/m, `sourceHash: ${hash}`) : front.replace(/^status:.*$/m, (line) => `${line}\nsourceHash: ${hash}`);
    await writeFile(file, `---\n${front}\n---\n${source.slice(match[0].length)}`);
    console.log(`stamp ${file} → ${hash}`);
  }
}

async function stampUi(locale) {
  if (!LOCALES.includes(locale)) fail(`unknown locale "${locale}"`);
  const { en } = await import(path.resolve('src/i18n/ui/en.ts'));
  const catalog = (await import(path.resolve(`src/i18n/ui/${locale}.ts`)))[locale];
  const stampFile = `src/i18n/ui/stamps/${locale}.json`;
  const stamps = existsSync(stampFile) ? JSON.parse(await readFile(stampFile, 'utf8')) : {};
  const keys = opt('keys')?.split(',');
  const namespaces = opt('ns')?.split(',');
  let count = 0;
  for (const key of Object.keys(catalog)) {
    if (!(key in en)) fail(`${locale}.ts defines "${key}", which en.ts does not (fix that first)`);
    if (keys && !keys.includes(key)) continue;
    if (namespaces && !namespaces.includes(key.slice(0, key.indexOf('.')))) continue;
    stamps[key] = stringHashOf(en[key]);
    count++;
  }
  for (const key of keys ?? []) if (!(key in catalog)) fail(`${locale}.ts does not define "${key}"`);
  // Drop stamps of strings the locale no longer defines.
  for (const key of Object.keys(stamps)) if (!(key in catalog)) delete stamps[key];
  await mkdir(path.dirname(stampFile), { recursive: true });
  const sorted = Object.fromEntries(Object.keys(stamps).sort().map((key) => [key, stamps[key]]));
  await writeFile(stampFile, `${JSON.stringify(sorted, null, 1)}\n`);
  console.log(`stamp ${stampFile}: ${count} strings`);
}

const locale = opt('locale');
if (locale && !LOCALES.includes(locale)) fail(`unknown locale "${locale}"`);
const locales = locale ? [locale] : LOCALES;

if (opt('ui')) await stampUi(opt('ui'));
else if (opt('page')) await stampMarkdown('pages', opt('page'), locales);
else if (args[0] && !args[0].startsWith('--')) await stampMarkdown('tools', args[0], locales);
else fail('usage: i18n:stamp <tool-id> | --page <about|privacy> | --ui <locale> [--keys …|--ns …] [--locale <locale>]');
