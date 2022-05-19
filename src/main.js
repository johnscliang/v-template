import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.router'
import initSnapshotPlugin from '../tools/snapshot.vconsole.plugin'

const app = createApp(App)
app.use(router)
app.mount('#app')

console.log('----env----', import.meta.env)

// 动态加载vconsole
let vconsole = null
if (!import.meta.env.PROD) {
  import('vconsole').then(({ default: VConsole }) => {
    vconsole = new VConsole()
    const snapshotPlugin = initSnapshotPlugin(VConsole.VConsolePlugin)
    vconsole.addPlugin(snapshotPlugin)
  })
}
