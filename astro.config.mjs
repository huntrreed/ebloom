import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify/functions";

export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'static', // ✅ Switch to 'static' for pre-rendered pages
  adapter: netlify({
    edge: false, // ✅ Use Node-based functions instead of Edge functions
  }),
});
