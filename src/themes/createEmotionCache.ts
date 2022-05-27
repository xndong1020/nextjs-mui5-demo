import createCache from '@emotion/cache'

export default function createEmotionCache() {
  // prepend class name with 'css-'
  return createCache({ key: 'css', prepend: true })
}
