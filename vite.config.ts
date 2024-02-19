import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/4096Scout-2024/',
  plugins: [preact()],
});
