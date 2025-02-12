import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, 
    port: 3000, 
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
  optimizeDeps: {
    include: ["katex/dist/katex.min.css"], // Ensure KaTeX CSS is handled properly
  },
});
