import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages servíruje projekt z podsložky podle názvu repa.
  base: '/strnadelweb/',
  server: {
    port: 5173,
    open: true,
  },
});
