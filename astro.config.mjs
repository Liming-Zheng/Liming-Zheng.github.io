import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://liming-zheng.github.io",
  markdown: {
    shikiConfig: {
      theme: "github-light"
    }
  }
});
