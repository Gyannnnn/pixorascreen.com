// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://pixorascreen.com',
  integrations: [
    sitemap({
      serialize(item) {
        if (item.url === 'https://pixorascreen.com/') {
          item.changefreq = 'daily';
          item.priority = 1.0;
        } else if (
          item.url.endsWith('/about/') ||
          item.url.endsWith('/contact/') ||
          item.url.endsWith('/privacy/')
        ) {
          item.changefreq = 'monthly';
          item.priority = 0.4;
        } else {
          item.changefreq = 'weekly';
          item.priority = 0.8;
        }
        return item;
      },
    }),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});