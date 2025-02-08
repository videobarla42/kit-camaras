import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from 'vite-plugin-compression';

// Configuración de Vite
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      deleteOriginFile: false,
      threshold: 10240,
    }),
  ],
  base: "/",
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    minify: 'esbuild', // O usa 'terser' si prefieres otro motor
    target: 'esnext',  // Asegúrate de compatibilidad con el target deseado
    sourcemap: false,  // Evita los mapas de fuente si no los necesitas
  },
});
