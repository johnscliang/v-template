import BaseAPI from './base/base.api'

export default class clientAPI extends BaseAPI {

  static login(params?: any) {
    const uri = `/login`
    return this.post(uri, params)
  }

  static getClientInfo(params?: any) {
    const uri = `/client/info`
    return this.get(uri, params)
  }

}
