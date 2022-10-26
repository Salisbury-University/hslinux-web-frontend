import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import { vitePluginMdToHTML } from "vite-plugin-md-to-html";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitePluginMdToHTML(),
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: "src/quasar-variables.sass",
    }),
  ],
});
