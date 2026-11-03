import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site's public address, used for canonical tags, sitemap and schema.
// On Netlify, `URL` is set automatically to the site's primary address
// (the free *.netlify.app one, or the custom domain once one is added).
// SITE_URL overrides it; the fallback is used for local builds.
const site = process.env.SITE_URL || process.env.URL || 'https://cbdecor.netlify.app';

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thanks/') && !page.includes('/404'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-IN', hi: 'hi-IN' },
      },
    }),
  ],
});
