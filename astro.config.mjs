import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://limingzheng.com",
  markdown: {
    shikiConfig: {
      theme: "github-light"
    }
  }
});
