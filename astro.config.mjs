// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["ko", "en", "ja"],
    defaultLocale: "ko",
  },
  integrations: [tailwind(), react(),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'dracula' },
      gfm: false,
    }),]
});