import BaseResp from './base/IbaseResp'
import ClientInfo from './clientInfo.model'

class PolicyListResponse implements BaseResp<ClientInfo> {

  public code: number

  constructor() {
    this.code = 0
  }

}
