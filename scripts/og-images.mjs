#!/usr/bin/env node
// Render the social preview images, one per locale: public/og/<locale>.png (1200×630).
//
//   node scripts/og-images.mjs
//
// The text comes from each locale's UI catalog (hero.heading, hero.browse), so rerun this after
// changing those strings or adding a locale. Facebook, X, LinkedIn, and WhatsApp ignore SVG
// previews, hence PNG. Text is laid out by Pango (through sharp), which shapes Devanagari and
// line-breaks Japanese; it needs Inter, Noto Sans Devanagari, and Noto Sans CJK JP installed.
import { mkdir, readFile } from 'node:fs/promises';
import sharp from 'sharp';

const LOCALES = ['en', 'es', 'pt', 'fr', 'de', 'hi', 'ja'];
const FONTS = { hi: 'Inter,Noto Sans Devanagari', ja: 'Inter,Noto Sans CJK JP' };
const W = 1200, H = 630, CARD = { x: 92, y: 92, w: 1016, h: 446 }, PAD = 56;

const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

async function catalogString(locale, key) {
  const source = await readFile(`src/i18n/ui/${locale}.ts`, 'utf8');
  const match = source.match(new RegExp(`"${key.replace('.', '\\.')}":\\s*"((?:[^"\\\\]|\\\\.)*)"`));
  if (!match) throw new Error(`${locale}: missing ${key}`);
  return JSON.parse(`"${match[1]}"`);
}

async function text(markup, font, width) {
  return sharp({ text: { text: markup, font, width, dpi: 72, rgba: true, wrap: 'word', spacing: 6 } })
    .png()
    .toBuffer({ resolveWithObject: true });
}

const background = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="#fafafa"/>
  <circle cx="900" cy="120" r="280" fill="#50e3c2" opacity=".25"/>
  <circle cx="1040" cy="360" r="240" fill="#ff0080" opacity=".18"/>
  <circle cx="720" cy="520" r="220" fill="#0070f3" opacity=".18"/>
  <rect x="${CARD.x}" y="${CARD.y}" width="${CARD.w}" height="${CARD.h}" rx="18" fill="#fff" stroke="#ebebeb" stroke-width="2"/>
</svg>`);

await mkdir('public/og', { recursive: true });
const logo = await sharp('public/favicon.svg').resize(64, 64).png().toBuffer();
const left = CARD.x + PAD, inner = CARD.w - PAD * 2;

for (const locale of LOCALES) {
  const font = FONTS[locale] ?? 'Inter';
  const heading = await catalogString(locale, 'hero.heading');
  const browse = await catalogString(locale, 'hero.browse');

  const brand = await text('<span foreground="#171717" font_weight="600" font_size="34pt">PixoraScreen</span>', 'Inter', 600);
  const head = await text(`<span foreground="#171717" font_weight="600" font_size="46pt">${escape(heading)}</span>`, font, inner);
  const label = await text(`<span foreground="#ffffff" font_weight="600" font_size="21pt">${escape(browse)}</span>`, font, 500);
  if (head.info.height > 190) throw new Error(`${locale}: heading needs more than 3 lines (${head.info.height}px)`);

  const pill = { w: label.info.width + 72, h: 60 };
  const pillY = CARD.y + CARD.h - PAD - pill.h;
  const pillSvg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${pill.w}" height="${pill.h}"><rect width="${pill.w}" height="${pill.h}" rx="30" fill="#171717"/></svg>`);

  await sharp(background)
    .composite([
      { input: logo, left, top: CARD.y + PAD },
      { input: brand.data, left: left + 84, top: CARD.y + PAD + Math.round((64 - brand.info.height) / 2) },
      { input: head.data, left, top: CARD.y + PAD + 64 + 36 },
      { input: pillSvg, left, top: pillY },
      { input: label.data, left: left + 36, top: pillY + Math.round((pill.h - label.info.height) / 2) },
    ])
    .png({ compressionLevel: 9, palette: true, quality: 90 })
    .toFile(`public/og/${locale}.png`);
  console.log(`public/og/${locale}.png`);
}
