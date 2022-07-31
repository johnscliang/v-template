import { createVNode, render } from "vue"
import modal from './modal.vue'

const div = document.createElement('div')
div.setAttribute('class', 'global_modal_container')
document.body.appendChild(div)

export type ModalConfig = {
  title?: string,
  content: string,
  showCancel?: boolean,
  cancelText?: string,
  confirmText?: string,
  confirm?: Function,
  cancel?: Function,
  div?: HTMLDivElement,
}

export default (modalConfig: ModalConfig) => {
  return new Promise((resolve, reject) => {
    const confirm = () => {
      render(null, div)
      resolve(true)
    }

    const cancel = () => {
      render(null, div)
    }

    if (!modalConfig.confirm) {
      modalConfig.confirm = confirm
    }

    if (!modalConfig.cancel) {
      modalConfig.cancel = cancel
    }
    modalConfig.div = div
    const vnode = createVNode(modal, modalConfig)
    render(vnode, div)
  })
}
