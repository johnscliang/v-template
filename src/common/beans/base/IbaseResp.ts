interface BaseResp<T> {

  code: number
  data?: T[]
  message?: string

}

export default BaseResp
