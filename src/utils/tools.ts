import showLoading from '@/common/component/loading/loading'
import modal from '@/common/component/modal/modal'

export class loading {
  static show() {
    showLoading(true)
  }

  static hide() {
    showLoading(false)
  }
}

// api refer: https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html
export function showModal(modalConfig: {
  title?: string,
  content: string,
  showCancel?: boolean,
  cancelText?: string,
  confirmText?: string,
  confirm?: Function,
  cancel?: Function,
}): Promise<any> {
  let dialogConfig = {
    ...modalConfig
  }
  const hasCallback = (dialogConfig.confirm || dialogConfig.cancel) ? true : false
  let promise = modal(dialogConfig)
  if (hasCallback) {
    return null
  }
  return promise
}
