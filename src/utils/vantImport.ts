import { Button, Collapse, CollapseItem } from 'vant'

// 动态引入vant 组件
function vantImport(app: any) {
  app.use(Button)
  app.use(Collapse)
  app.use(CollapseItem)
}

export default vantImport
