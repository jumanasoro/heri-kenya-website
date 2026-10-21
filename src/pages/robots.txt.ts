import type { APIRoute } from 'astro';

// Test builds (PUBLIC_NOINDEX=true) block all crawlers; the live site allows them and lists the sitemap.
export const GET: APIRoute = ({ site }) => {
  const body =
    import.meta.env.PUBLIC_NOINDEX === 'true'
      ? 'User-agent: *\nDisallow: /\n'
      : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', site)}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
