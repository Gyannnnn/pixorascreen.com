import type { APIRoute } from 'astro';
import { siteUrl } from '../data/seo';

export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap-index.xml\nSitemap: ${siteUrl}/sitemap.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
