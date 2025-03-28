import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        client: 'index.html',
        server: 'server.ts'
      }
    }
  },
  ssr: {
    noExternal: ['react-router-dom']
  }
});
