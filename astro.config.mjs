import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages serves project sites under a sub-path, so both `site` and `base`
// come from the environment. Local dev defaults to localhost at the root.
const siteUrl = process.env.SITE_URL || 'http://localhost:4321';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: siteUrl,
  base,
  output: 'static',
  integrations: [sitemap()],
  build: { format: 'directory' },
  markdown: { shikiConfig: { theme: 'github-dark' } },
});
