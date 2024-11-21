import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5273
  },
  plugins: [react(), svgr()],
  optimizeDeps: {
    exclude: ['chunk-I4MZPW7S.js', 'chunk-M324AGAM.js']
  }
})
