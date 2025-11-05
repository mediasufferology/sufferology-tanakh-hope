import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    {
      name: "diagnostic-and-spa-fallback",
      closeBundle() {
        const outDir = "dist";
        const indexPath = path.resolve(__dirname, outDir, "index.html");
        if (!fs.existsSync(indexPath)) {
          console.error("❌ Build failed: index.html missing in dist/");
          throw new Error("Build failed: index.html missing in dist/");
        }
        const assetsDir = path.resolve(__dirname, outDir, "assets");
        if (!fs.existsSync(assetsDir)) {
          console.warn("⚠️  Warning: assets directory missing in dist/");
        }
        const notFoundPath = path.resolve(__dirname, outDir, "404.html");
        try {
          fs.copyFileSync(indexPath, notFoundPath);
          console.log("✅ SPA fallback: created dist/404.html");
        } catch (e) {
          console.warn("⚠️  SPA fallback: could not create 404.html", e);
        }
      },
    },
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
}));
