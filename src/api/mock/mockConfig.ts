export enum METHOD {
  GET,
  POST
}

type MockConfig = {
  readonly url: string
  readonly method: METHOD
  readonly statusCode: number
  readonly mode: any
  getJsonPath(): Promise<any>
}

export default MockConfig
