import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // make sure app is served from root
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',   // Vercel expects dist
    sourcemap: false, // optional: can disable sourcemaps for smaller build
  },
  server: {
    host: true,       // allow external access during dev
    port: 5173,       // local dev port
  },
})
