import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import path from "path";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [reactRouter(), tsconfigPaths()],
  // server: {
  //   hmr: {
  //     overlay: false,
  //   },
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app"),
    },
  },
});
