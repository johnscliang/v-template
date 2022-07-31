import BaseAPI from './base.api'

export default class clientAPI extends BaseAPI {

  static login(params?: any) {
    return this.post({
      url: `/login`,
      params: params,
      statusCode: 200,
      getJsonPath() {
        const loginSuccess = import('./mock/login/login.json')
        const loginFail = import('./mock/login/loginFail.json')
        return loginSuccess
      }
    })
  }

  static getClientInfo(params?: any) {
    return this.get({
      url: `/client/info`,
      params: params,
      statusCode: 200,
      getJsonPath() {
        let result1 = import('./mock/info/clientInfo.json')
        let result2 = import('./mock/info/clientInfo2.json')
        return result1
      }
    })
  }

}
