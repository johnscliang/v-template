import addAll from './mockUtils'

export default await addAll(
  // client mock
  (await import('./modules/client/clientAPI.mock')).default,
  (await import('./modules/client/clientAPI2.mock')).default,
)
