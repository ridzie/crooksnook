// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import node from "@astrojs/node";

/*
// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
});
*/

export default defineConfig({
  output: "server",                 // not "static"
  adapter: node({ mode: "standalone" }), // runs as Node app
  server: { host: true },                  // <- forces 0.0.0.0 binding
  site: 'https://ridzie.me',
  integrations: [mdx(), sitemap()],
});
