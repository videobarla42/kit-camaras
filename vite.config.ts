import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/kits_camaras/", // Nombre del repositorio
  resolve: {
    alias: {
      '@': '/src',  // Esto hace que '@' apunte a la carpeta 'src'
    },
  },
});
