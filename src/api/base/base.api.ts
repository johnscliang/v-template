import axios from "axios"
import { store } from '@/store/index.store'

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 60 * 1000,
  headers: { jwt: 'xxxxxx' }
})

// 请求拦截器
instance.interceptors.request.use((config) => config, (error) => Promise.reject(error))

// 响应拦截器
instance.interceptors.response.use((response) => {
  const res = response.data
  //   store.state.pageData =
  return response
}, (error) => Promise.reject(error))

export default class BaseAPI {

  static get(uri: string, params: any) {
    return instance({
      method: 'GET',
      url: uri,
      params: params
    })
  }

  static post(uri: string, params: any) {
    return instance({
      method: 'POST',
      url: uri,
      params: params
    })
  }

  static postJson(uri: string, data: any) {
    return instance({
      method: 'POST',
      url: uri,
      data
    })
  }

}