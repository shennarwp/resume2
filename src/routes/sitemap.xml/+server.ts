import type { RequestHandler } from './$types';
import { siteOrigin, supportedLocales } from '$lib/site-metadata';

export const prerender = true;

export const GET: RequestHandler = async () => {
  const urls = supportedLocales
    .map((locale) => {
      const path = locale === 'en' ? '/' : `/${locale}/`;
      return `  <url>\n    <loc>${siteOrigin}${path}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${locale === 'en' ? '1.0' : '0.8'}</priority>\n  </url>`;
    })
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=0, s-maxage=3600',
    },
  });
};
