import BaseAPI from './base/base.api'

export default class clientAPI extends BaseAPI {

  static login(params: any) {
    const uri = `/login`
    return this.post(uri, params)
  }

}
