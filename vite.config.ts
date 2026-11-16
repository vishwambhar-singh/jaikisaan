import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES === 'true' || process.env.GITHUB_ACTIONS === 'true' ? '/jaikisaan/' : '/',
  server: {
    host: true,
    port: 3000,
    open: false,
    allowedHosts: true
  }
});

