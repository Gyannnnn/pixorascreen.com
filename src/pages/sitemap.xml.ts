import type { APIRoute } from 'astro';
import { localeOrder, locales } from '../data/locales';
import { allToolPaths, siteUrl } from '../data/seo';

export const GET: APIRoute = () => {
  const pages: { path: string; priority: string; changefreq: string }[] = [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    ...localeOrder
      .filter((locale) => locale !== 'en')
      .map((locale) => ({
        path: `${locales[locale].pathPrefix}/`,
        priority: '0.8',
        changefreq: 'weekly',
      })),
    ...allToolPaths().map(({ path }) => ({
      path,
      priority: '0.8',
      changefreq: 'weekly',
    })),
    { path: '/about/', priority: '0.4', changefreq: 'monthly' },
    { path: '/privacy/', priority: '0.4', changefreq: 'monthly' },
    { path: '/contact/', priority: '0.4', changefreq: 'monthly' },
  ];

  const urlElements = pages
    .map(
      ({ path, priority, changefreq }) => `  <url>
    <loc>${siteUrl}${path}</loc>
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
