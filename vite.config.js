import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import styleImport, { VantResolve } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
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
  base: '/',
  build: {
    outDir: 'dist'
  },
  envDir: 'config'
})
