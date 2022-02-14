import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'ą',
  'd',
  'e',
  'h',
  'i',
  'k',
  'l',
  'm',
  'n',
  'ng',
  'o',
  'r',
  'ř',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
