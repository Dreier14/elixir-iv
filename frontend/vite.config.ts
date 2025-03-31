import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist/client',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        main: './index.html'  // Explicit input path
      }
    }
  },
  ssr: {
    target: 'node',
    noExternal: true
  }
})