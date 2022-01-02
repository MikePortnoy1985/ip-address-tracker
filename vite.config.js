import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

const aliases = {
  js: resolve(__dirname, './src/js/components'),
  css: resolve(__dirname, './src/css'),
};

// https://vitejs.dev/config/
export default defineConfig({
  base: `https://mikeportnoy1985.github.io/ip-address-tracker/dist/`,
  plugins: [react()],
  resolve: {
    alias: aliases,
  },
});
