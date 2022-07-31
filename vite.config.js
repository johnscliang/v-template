import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
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
  base: '/vtemplate/',
  build: {
    outDir: 'vtemplate'
  },
  envDir: 'config'
})
