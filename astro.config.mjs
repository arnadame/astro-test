// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
// https://astro.build/config
export default defineConfig({
  site: "https://https://astro-test-stellar.netlify.app/",

  vite: {
    plugins: [tailwindcss()],
},

  integrations: [preact()],
});