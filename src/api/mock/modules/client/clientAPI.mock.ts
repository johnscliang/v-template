import MockConfig, { METHOD } from '../../mockConfig'

const clientAPIMock: Array<MockConfig> = [
  {
    url: '/login',
    method: METHOD.POST,
    statusCode: 200,
    mode: 'fail',
    getJsonPath() {
      let path
      switch (this.mode) {
        case 'success':
          path = '/client/json/login.json'
          break
        case 'fail':
          path = 'client/json/loginFail.json'
          break
        default:

          break
      }
      return path
    }
  }
]

export default clientAPIMock
