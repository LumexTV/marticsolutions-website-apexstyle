import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    // Optimierungen für bessere Performance
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // Let Vite's automatic chunking algorithm optimize imports directly
      },
    },
    // CSS Optimierung
    cssCodeSplit: true,
    // Asset Optimierung
    assetsInlineLimit: 4096,
  },
  // Server Optimierung für Entwicklung
  server: {
    port: 5173,
    host: true,
  },
  // Preview Server
  preview: {
    port: 4173,
    host: true,
  },
  // Optimierungen für SEO und Performance
  define: {
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false,
  },
})
