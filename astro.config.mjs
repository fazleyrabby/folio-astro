import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import rehypeSlug from "rehype-slug";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://folio.fazleyrabbi.xyz",
  output: "static",
  trailingSlash: "ignore",
  integrations: [tailwind(), sitemap()],
  image: {
    service: passthroughImageService(),
  },
  markdown: {
    rehypePlugins: [rehypeSlug],
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "nord",
      },
    },
  },
});
