import MockConfig, { METHOD } from '../../mockConfig'

const clientAPIMock2: Array<MockConfig> = [
  {
    url: '/client/info',
    method: METHOD.GET,
    statusCode: 200,
    mode: 'male',
    getJsonPath() {
      switch (this.mode) {
        case 'male':
          return import('./json/clientInfo.json')
        case 'female':
          return import('./json/clientInfo2.json')
        default:
          return import('./json/clientInfo.json')
      }
    }
  }
]

export default clientAPIMock2
