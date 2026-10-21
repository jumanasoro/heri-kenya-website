// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL lets test builds use the test address in share links and the sitemap.
const site = process.env.SITE_URL ?? 'https://heri-kenya.org';

// https://astro.build/config
export default defineConfig({
  site,
  // Keep the existing WordPress URLs (e.g. /projects/, /contact-us/) so links and rankings survive.
  trailingSlash: 'always',
  i18n: {
    // English is served at the root; translations live under /de/, /it/ and /sw/ as they are added.
    locales: ['en', 'de', 'it', 'sw'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // Pages that shouldn't appear in search results.
      filter: (page) => !/\/(thank-you|404)\/?$/.test(page),
    }),
  ],
});
