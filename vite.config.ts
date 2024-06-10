import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // The default build output directory
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});