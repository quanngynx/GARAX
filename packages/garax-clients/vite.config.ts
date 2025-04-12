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
        // manualChunks: {
        //   vendor: ['react', 'react-dom', 'react-router-dom'],
        //   antd: ['antd'],
        //   lodash: ['lodash'],
        //   framer: ['framer'],
        //   framerMotion: ['framer-motion'],
        //   tailwindMerge: ['tailwind-merge'],
        //   i18next: ['i18next']
        // }
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'react';
            }
            if (id.includes('antd')) {
              return 'antd';
            }
            if (id.includes('framer-motion')) {
              return 'framerMotion';
            }
            if (id.includes('framer')) {
              return 'framer';
            }
            if (id.includes('tailwind-merge')) {
              return 'tailwindMerge';
            }
            if (id.includes('i18next')) {
              return 'i18next';
            }
            return 'vendor';
          }
          if (id.includes('src/components/')) {
            return 'components';
          }
        },
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
