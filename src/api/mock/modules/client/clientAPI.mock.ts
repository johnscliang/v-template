import MockConfig, { METHOD } from '../../mockConfig'

const clientAPIMock: Array<MockConfig> = [
  {
    url: '/login',
    method: METHOD.POST,
    statusCode: 200,
    mode: 'fail',
    getJsonPath() {
      switch (this.mode) {
        case 'success':
          return import('./json/login.json')
        case 'fail':
          return import('./json/loginFail.json')
        default:
          return import('./json/login.json')
      }
    }
  }
]

export default clientAPIMock
