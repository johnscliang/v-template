import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import MockConfigList from './mockConfigList'
import { METHOD } from './mockConfig'

export default class MockEngine {

  private static mockAdapter: MockAdapter

  public static getAdapter() {
    return this.mockAdapter
  }

  public static start(axiosInstance: AxiosInstance) {
    this.mockAdapter = new MockAdapter(axiosInstance, { onNoMatch: "throwException", delayResponse: 500 })
    // console.log('mock config', MockConfigList)
    MockConfigList.forEach((mockConfig) => {
      if (mockConfig.method === METHOD.GET) {
        this.mockAdapter.onGet(mockConfig.url).reply((config?) => {
          return new Promise(async function (resolve, reject) {
            resolve([mockConfig.statusCode, (await import(`./modules/${mockConfig.getJsonPath()}`)).default])
          })
        })
      } else if (mockConfig.method === METHOD.POST) {
        this.mockAdapter.onPost(mockConfig.url).reply((config) => {
          return new Promise(async function (resolve, reject) {
            resolve([mockConfig.statusCode, (await import(`./modules/${mockConfig.getJsonPath()}`)).default])
          })
        })
      }
    })
  }

}
