import MockConfig from './mockConfig'
import addAll from './mockUtils'

async function addAllWrap() : Promise<MockConfig[]> {
  return addAll(
    ...[
      (await import('./modules/client/clientAPI.mock')).default,
      (await import('./modules/client/clientAPI2.mock')).default
    ]
  )
}

export default addAllWrap()
