import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/yahtzee/lit/',
  build: {
    // lib: {
    //   entry: 'src/app.ts',
    //   formats: ['es'],
    // },
    rollupOptions: {
      // external: /^lit-element/,
    },
  },
});
