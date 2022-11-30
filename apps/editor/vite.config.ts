import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import tsconfigPaths from "vite-tsconfig-paths";
export default defineConfig({
  plugins: [
    vue(),
    tsconfigPaths({
      loose: true,
    }),
    Pages({
      exclude: ["**/components/*"],
    }),
  ],
  define: {
    "process.env": {},
  },
  server: {
    proxy: {},
  },
});
