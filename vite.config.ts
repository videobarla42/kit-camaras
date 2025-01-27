import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Para dominios personalizados, usa "/"
  resolve: {
    alias: {
      '@': '/src', // Alias para que '@' apunte a 'src'
    },
  },
});
