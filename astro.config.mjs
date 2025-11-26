// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://abhivaikar.github.io',
  base: '/seed-static-site',
  integrations: [sitemap()],
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto'
  },
  compressHTML: true
});
