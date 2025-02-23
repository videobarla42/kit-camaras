import { webcrypto } from "crypto";

// Verifica si globalThis.crypto no existe o si getRandomValues no está definido
if (!globalThis.crypto || typeof globalThis.crypto.getRandomValues !== "function") {
  globalThis.crypto = webcrypto as unknown as Crypto;
}

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      deleteOriginFile: false,
      threshold: 10240,
    }),
  ],
  base: "/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    minify: "esbuild",
    target: "esnext",
    sourcemap: false,
  },
  define: {
    "process.env": {},
  },
});
