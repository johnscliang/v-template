import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.router'
import { key, store } from '@/store/index.store'
//
import initSnapshotPlugin from '../tools/snapshot.vconsole.plugin'
import initHelperPlugin from '../tools/helper.vconsole.plugin'

const app = createApp(App)
app.use(router)
// TODO 需要this.$store有类型声明的话参考关键词：ComponentCustomProperties
app.use(store, key)
app.mount('#app')

/* eslint-disable no-console */
console.log('----env----', import.meta.env)

// 动态加载vconsole
let vconsole = null
if (!import.meta.env.PROD && !import.meta.env.MODE === 'mock') {
  import('vconsole').then(({ default: VConsole }) => {
    vconsole = new VConsole()
    const snapshotPlugin = initSnapshotPlugin(vconsole, VConsole.VConsolePlugin)
    const helperPlugin = initHelperPlugin(vconsole, VConsole.VConsolePlugin)
    vconsole.addPlugin(snapshotPlugin)
    vconsole.addPlugin(helperPlugin)
  })
}
