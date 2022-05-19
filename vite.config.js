import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // `@` --> `src`
    }
  },
  server: {
    port: 4330
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/style/common.scss";@import "@/style/foo.scss";'
      }
    }
  },
  base: '/static/',
  build: {
    outDir: 'dist'
  }
})
