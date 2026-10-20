// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://heri-kenya.org',
  // Keep the existing WordPress URLs (e.g. /projects/, /contact-us/) so links and rankings survive.
  trailingSlash: 'always',
  i18n: {
    // English is served at the root; translations live under /de/, /it/ and /sw/ as they are added.
    locales: ['en', 'de', 'it', 'sw'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
