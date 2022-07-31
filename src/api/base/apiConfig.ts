type ApiConfig = {
  readonly url: string
  params: any
  readonly statusCode: number
  getJsonPath(): Promise<any>
}

export default ApiConfig
