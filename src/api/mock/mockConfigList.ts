import clientAPIMock from './modules/client/clientAPI.mock'
import clientAPIMock2 from './modules/client/clientAPI2.mock'
import MockConfig from './mockConfig'

const MockConfigList: Array<MockConfig> = []

function addAll(...mockConfigList: Array<MockConfig>[]) {
  mockConfigList.forEach((list) => {
    list.forEach((config) => {
      MockConfigList.push(config)
    })
  })
}

addAll(
  clientAPIMock,
  clientAPIMock2
)

export default MockConfigList
