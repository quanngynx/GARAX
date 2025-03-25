import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr";
import * as path from "path";
import { PORT } from './src/venv/port';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: Number(PORT)
  },
  plugins: [react(), svgr()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  optimizeDeps: {
    exclude: ['chunk-I4MZPW7S.js', 'chunk-M324AGAM.js']
  },
})
