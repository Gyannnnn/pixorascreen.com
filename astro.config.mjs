// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';
import { satteri } from '@astrojs/markdown-satteri';

// https://astro.build/config
export default defineConfig({
  site: 'https://pixorascreen.com',
  integrations: [react()],

  // Tool articles live in src/content/tools/<locale>/<tool-id>.md. Smart punctuation stays
  // off so the text renders exactly as written in every language (French guillemets,
  // German quotes and Japanese punctuation must not be rewritten into English quotes).
  markdown: {
    processor: satteri({ features: { smartPunctuation: false } }),
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});