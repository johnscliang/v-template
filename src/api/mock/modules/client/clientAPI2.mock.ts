import MockConfig, { METHOD } from '../../mockConfig'

const clientAPIMock2: Array<MockConfig> = [
  {
    url: '/client/info',
    method: METHOD.GET,
    statusCode: 200,
    params: {},
    mode: 'male',
    getJsonPath() {
      let path
      switch (this.mode) {
        case 'male':
          path = '/client/json/clientInfo.json'
          break
        case 'female':
          path = 'client/json/clientInfo2.json'
          break
        default:
          break
      }
      return path
    }
  }
]

export default clientAPIMock2
