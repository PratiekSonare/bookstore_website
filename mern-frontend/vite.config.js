import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "flowbite/dist/flowbite.css";`
      }
    }
  },
  server: {
    proxy: {
      '/search': {
        target: 'http://localhost:5000', // Adjust to your backend's address
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
