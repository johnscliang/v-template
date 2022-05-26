import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import MockConfigList from './mockConfigList'
import { METHOD } from './mockConfig'

export default class MockEngine {

  private mockAdapter: MockAdapter

  constructor(axiosInstance: AxiosInstance) {
    this.mockAdapter = new MockAdapter(axiosInstance)
    // console.log('mock config', MockConfigList)
    MockConfigList.forEach((mockConfig) => {
      if (mockConfig.method === METHOD.GET) {
        this.mockAdapter.onGet(mockConfig.url, { params: mockConfig.params }).reply((config?) => {
          return new Promise(async function (resolve, reject) {
            resolve([mockConfig.statusCode, (await import(`./modules/${mockConfig.getJsonPath()}`)).default])
          })
        })
      } else if (mockConfig.method === METHOD.POST) {
        this.mockAdapter.onPost(mockConfig.url, mockConfig.params).reply((config) => {
          return new Promise(async function (resolve, reject) {
            resolve([mockConfig.statusCode, (await import(`./modules/${mockConfig.getJsonPath()}`)).default])
          })
        })
      }
    })
  }

  getMockAdapter() {
    return this.mockAdapter
  }

}
