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
  base: './', // 打包路径
  server: {
    port: 4330
  },
  build: {
    outDir: 'dist'
  }
})
