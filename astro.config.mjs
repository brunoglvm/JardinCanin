// @ts-check
import { defineConfig } from "astro/config";
import Icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [Icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
