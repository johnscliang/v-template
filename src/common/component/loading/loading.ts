import { createVNode, render } from "vue"
import loading from './loading.vue'

const div = document.createElement('div')
div.setAttribute('class', 'global_loading_container')
document.body.appendChild(div)

export default function showLoading(show: boolean) {
  const vnode = createVNode(loading)
  if (show) {
    render(vnode, div)
  } else {
    render(null, div)
  }
}
