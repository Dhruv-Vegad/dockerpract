import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Declare process for TypeScript compatibility without @types/node
declare const process: {
  env: Record<string, string | undefined>;
};

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        // target: 'http://mern_project-backend-1:3001',
        // target: 'http://backend:3001',
        target: (typeof process !== 'undefined' && process.env.BACKEND_URL) || 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});