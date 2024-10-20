import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import lit from "@astrojs/lit";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  site: 'https://odyssey-theme.sapling.supply/',

  // Generate sitemap (set to "false" to disable)
  sitemap: true,

  // Add renderers to the config
  integrations: [sitemap(), mdx(), lit(), icon(), tailwind()],

  output: "server",
  adapter: vercel()
});