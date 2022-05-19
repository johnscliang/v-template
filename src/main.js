import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.router'

const app = createApp(App)
app.use(router)
app.mount('#app')

console.log('----env----', import.meta.env)

// 动态加载vconsole
let vconsole = null
if (!import.meta.env.PROD) {
  import('vconsole').then(({ default: VConsole }) => {
    vconsole = new VConsole()
  })
}
