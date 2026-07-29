import type { APIRoute } from 'astro';
import { localeOrder, locales } from '../data/locales';
import { allToolPaths } from '../data/seo';

export const GET: APIRoute = () => {
  const baseUrl = 'https://pixorascreen.com';

  const urls: { loc: string; changefreq: string; priority: string }[] = [];

  // Homepage
  urls.push({ loc: `${baseUrl}/`, changefreq: 'daily', priority: '1.0' });

  // Localized homepages
  for (const locale of localeOrder) {
    if (locale !== 'en') {
      urls.push({ loc: `${baseUrl}${locales[locale].pathPrefix}/`, changefreq: 'weekly', priority: '0.8' });
    }
  }

  // Static pages
  urls.push({ loc: `${baseUrl}/about/`, changefreq: 'monthly', priority: '0.4' });
  urls.push({ loc: `${baseUrl}/contact/`, changefreq: 'monthly', priority: '0.4' });
  urls.push({ loc: `${baseUrl}/privacy/`, changefreq: 'monthly', priority: '0.4' });

  // Tool pages
  for (const item of allToolPaths()) {
    urls.push({ loc: `${baseUrl}${item.path}`, changefreq: 'weekly', priority: '0.8' });
  }

  const urlElements = urls
    .map(
      (u) =>
        `  <url>\n    <loc>${u.loc}</loc>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
