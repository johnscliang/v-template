import { Button } from 'vant'

// 动态引入vant 组件
function vantImport(app: any) {
  app.use(Button)
}

export default vantImport
