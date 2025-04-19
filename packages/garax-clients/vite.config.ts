import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr";
import * as path from "path";
import { PORT } from './src/venv/port';

const chunkGroups = {
  react: ['react', 'react-dom', 'react-router-dom'],
  antd: ['antd'],
  lodash: ['lodash'],
  framer: ['framer'],
  framerMotion: ['framer-motion'],
  tailwindMerge: ['tailwind-merge'],
  i18next: ['i18next']
};

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: Number(PORT)
  },
  plugins: [
    react(), 
    svgr(),
  ],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
    ],
  },
  optimizeDeps: {
    exclude: ['chunk-I4MZPW7S.js', 'chunk-M324AGAM.js']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            for (const [chunkName, deps] of Object.entries(chunkGroups)) {
              if (deps.some(dep => id.includes(dep))) {
                return chunkName;
              }
            }
            return 'vendor';
          }
        }
      }
    },
    terserOptions: {
      compress: true,
      ecma: 2020,
      mangle: true,
      module: true,
      format: {
        ascii_only: true,
        comments: false
      }
    },
    minify: 'terser',
  },
  define: {
    'process.env.NODE_ENV': '"production"' // tree-shaking better
  }
})
