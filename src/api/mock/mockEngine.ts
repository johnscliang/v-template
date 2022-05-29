import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import MockConfigList from './mockConfigList'
import { METHOD } from './mockConfig'

export default class MockEngine {

  private static mockAdapter: MockAdapter

  public static getAdapter() {
    return this.mockAdapter
  }

  public static async start(axiosInstance: AxiosInstance) {
    this.mockAdapter = new MockAdapter(axiosInstance, { onNoMatch: "throwException", delayResponse: 100 })
    const mockConfigList = (await MockConfigList)
    // console.log('mock config', mockConfigList)
    mockConfigList.forEach((mockConfig) => {
      const jsonPath = `./modules/${mockConfig.getJsonPath()}`
      if (mockConfig.method === METHOD.GET) {
        this.mockAdapter.onGet(mockConfig.url).reply((config) => {
          return new Promise(async function (resolve, reject) {
            const json = (await import(/* @vite-ignore */jsonPath)).default as JSON
            resolve([mockConfig.statusCode, json])
          })
        })
      } else if (mockConfig.method === METHOD.POST) {
        this.mockAdapter.onPost(mockConfig.url).reply((config) => {
          return new Promise(async function (resolve, reject) {
            const json = (await import(/* @vite-ignore */jsonPath)).default as JSON
            resolve([mockConfig.statusCode, json])
          })
        })
      }
    })
  }

}
