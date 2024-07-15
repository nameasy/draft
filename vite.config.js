import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: '/draft/',
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
});
