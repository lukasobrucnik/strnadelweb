import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Web běží na vlastní doméně strnadelmotorsport.cz (servuje se z rootu),
  // proto base musí být '/'. CNAME soubor je v public/CNAME a kopíruje se
  // automaticky do dist/ při každém buildu (a tedy i při npm run deploy).
  base: '/',
  server: {
    port: 5173,
    open: true,
  },
});
