import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { cartographer } from "@replit/vite-plugin-cartographer";

export default defineConfig(({ mode }) => ({
  // GitHub Pages base path
  base: "/portfolio/",

  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(mode !== "production" && process.env.REPL_ID !== undefined
      ? [cartographer()]
      : []),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },

  root: path.resolve(__dirname, "client"),

  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "client", "index.html"),
      },
    },
  },

  server: {
    fs: {
      strict: false,
      allow: [".."],
    },
    port: 3000,
    open: true,
    cors: true,
  },

  preview: {
    port: 3000,
    open: true,
  },
}));
