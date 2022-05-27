import MockConfig from './mockConfig'

export default function addAll(...mockConfigListArr: Array<MockConfig>[]) {
  const mockConfigList: Array<MockConfig> = []
  mockConfigListArr.forEach((list) => {
    list.forEach((config) => {
      mockConfigList.push(config)
    })
  })
  return mockConfigList
}
