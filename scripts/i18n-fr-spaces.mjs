#!/usr/bin/env node
// French typography: replaces the ordinary space before : ; ! ? and inside « » with a no-break
// space (U+00A0), so the punctuation never wraps onto a line of its own. i18n-lint reports any
// ordinary space left in those places.
//
//   node scripts/i18n-fr-spaces.mjs            fix src/i18n/ui/fr.ts and src/content/*/fr/*.md
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

export const NBSP = ' ';
export const fixFrench = (text) =>
  text
    .replace(/ ([:;!?])(?=[\s"'”»)\]*_<]|$)/gm, `${NBSP}$1`)
    .replace(/« /g, `«${NBSP}`)
    .replace(/ »/g, `${NBSP}»`);

if (import.meta.url === `file://${process.argv[1]}`) {
  const files = ['src/i18n/ui/fr.ts'];
  for (const collection of ['tools', 'pages']) {
    const dir = path.join('src/content', collection, 'fr');
    for (const name of await readdir(dir)) if (name.endsWith('.md')) files.push(path.join(dir, name));
  }
  let changed = 0;
  for (const file of files) {
    const source = await readFile(file, 'utf8');
    const fixed = fixFrench(source);
    if (fixed !== source) {
      await writeFile(file, fixed);
      changed++;
    }
  }
  console.log(`fr spaces: ${changed} of ${files.length} files updated`);
}
