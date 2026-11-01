import type { APIRoute } from 'astro';
import { sitemapEntries } from '../i18n/indexing';

// Lists indexable URLs only: a translation enters once it is complete (see TRANSLATION.md).
export const GET: APIRoute = () => {
  const urlElements = sitemapEntries()
    .map(
      ({ loc, priority, changefreq }) => `  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};
