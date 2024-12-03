import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import fulldev from "fulldev-ui/integration";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    fulldev({
      css: "/src/styles/base.css",
      colors: {
        theme: "dark",
        dark: {
          background: "#111110",
          base: "#6F6D66",
          brand: "#F50",
        },
        light: {
          background: "#EEEEEC",
          base: "#6F6D66",
          brand: "#F50",
        },
      },
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
});
