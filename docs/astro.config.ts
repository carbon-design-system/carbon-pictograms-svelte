import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";
import { version } from "../package.json" assert { type: "json" };

export default defineConfig({
  integrations: [svelte()],
  vite: {
    define: {
      __VERSION: JSON.stringify(version),
    },
  },
});
