// @ts-check
import { defineConfig } from 'astro/config';

// Production site on Vercel. `site` is used for hreflang and the share image.
export default defineConfig({
  site: 'https://wedding-invitation-diana-laurin.vercel.app',
  trailingSlash: 'always',
});
