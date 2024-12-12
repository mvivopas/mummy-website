import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import lit from "@astrojs/lit";
import sentry from "@sentry/astro";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  site: 'https://odyssey-theme.sapling.supply/',

  // Generate sitemap (set to "false" to disable)
  sitemap: true,

  // Add renderers to the config
  integrations: [sitemap(), mdx(), lit(), icon(), tailwind(),
    sentry({
      dsn: "https://6c60b87303a6232796fc983168c7b06c@o4508393660022784.ingest.de.sentry.io/4508393662906448",
      sourceMapsUploadOptions: {
        project: "web-mama",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],

  output: "server",
  adapter: vercel()
});
