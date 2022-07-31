import showLoading from '@/common/component/loading/loading'

export class loading {
  static show() {
    showLoading(true)
  }

  static hide() {
    showLoading(false)
  }
}
