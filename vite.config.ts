import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Use relative paths to make it easier to host anywhere
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
