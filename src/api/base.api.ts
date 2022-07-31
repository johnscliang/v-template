import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import ApiConfig from "./base/apiConfig"

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 60 * 1000,
  headers: { jwt: 'xxxxxx' }
})

// 请求拦截器
instance.interceptors.request.use((config) => config, (error) => Promise.reject(error))

// 响应拦截器
instance.interceptors.response.use((response) => {
  const res = response.data
  return response
}, (error) => Promise.reject(error))

// mock 配置
let mockAdapter: any = null
let mockConfigSet: Set<string> | null = null
if (import.meta.env.MODE === 'mock') {
  mockAdapter = new MockAdapter(instance, { onNoMatch: "throwException", delayResponse: 100 })
  mockConfigSet = new Set<string>()
}

export default class BaseAPI {

  private static getMockConfigSetKey(url: string, method: string) {
    return `${url}:${method}`
  }

  private static setMockConfig(apiConfig: ApiConfig, method: string) {
    if (mockAdapter && !mockConfigSet.has(this.getMockConfigSetKey(apiConfig.url, method))) {
      mockConfigSet.add(this.getMockConfigSetKey(apiConfig.url, method))
      if (method === 'GET') {
        mockAdapter.onGet(apiConfig.url).reply((config: any) => {
          return new Promise(async function (resolve, reject) {
            resolve([apiConfig.statusCode, (await apiConfig.getJsonPath()).default])
          })
        })
      }
      if (method === 'POST') {
        mockAdapter.onPost(apiConfig.url).reply((config: any) => {
          return new Promise(async function (resolve, reject) {
            resolve([apiConfig.statusCode, (await apiConfig.getJsonPath()).default])
          })
        })
      }
    }
  }

  static get(apiConfig: ApiConfig) {
    this.setMockConfig(apiConfig, 'GET')
    return instance({
      method: 'GET',
      url: apiConfig.url,
      params: apiConfig.params
    })
  }

  static post(apiConfig: ApiConfig) {
    this.setMockConfig(apiConfig, 'POST')
    return instance({
      method: 'POST',
      url: apiConfig.url,
      data: apiConfig.params
    })
  }

  static postForm(apiConfig: ApiConfig) {
    this.setMockConfig(apiConfig, 'POST')
    return instance({
      method: 'POST',
      url: apiConfig.url,
      params: apiConfig.params
    })
  }

}
