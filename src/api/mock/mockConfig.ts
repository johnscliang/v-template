export enum METHOD {
  GET,
  POST
}

type MockConfig = {
  readonly url: string
  readonly method: METHOD
  readonly statusCode: number
  readonly params: any
  readonly mode: any
  getJsonPath: Function
}

export default MockConfig
