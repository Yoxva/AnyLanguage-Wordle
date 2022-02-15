import { CONFIG } from './config'

export const VALIDGUESSES = [
  'řukva',
  'xongni',
  'mvavi',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
