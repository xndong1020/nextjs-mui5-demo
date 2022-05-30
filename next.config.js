const path = require('path')
const crypto = require('crypto')
const uuid = require('uuid')

/**
 * Generate Content Security Policy for the app.
 * Uses randomly generated nonce (base64)
 *
 * @returns [csp: string, nonce: string] - CSP string in first array element, nonce in the second array element.
 */
const generateCsp = () => {
  const production = process.env.NODE_ENV === 'production'

  // generate random nonce converted to base64. Must be different on every HTTP page load
  const hash = crypto.createHash('sha256')
  hash.update(uuid.v4())
  const nonce = hash.digest('base64')

  let csp = ``
  csp += `default-src 'none';`
  csp += `img-src 'self';`
  csp += `base-uri 'self';`
  csp += `style-src https://fonts.googleapis.com 'unsafe-inline';` // NextJS requires 'unsafe-inline'
  csp += `script-src 'nonce-${nonce}' 'unsafe-inline' 'self' ${
    production ? '' : "'unsafe-eval'"
  };` // NextJS requires 'self' and 'unsafe-eval' in dev (faster source maps)
  csp += `font-src https://fonts.gstatic.com;`
  if (!production) csp += `connect-src 'self';`

  return [csp, nonce]
}

const [csp, _] = generateCsp()

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Content-Security-Policy',
    value: csp.replace(/\s{2,}/g, ' ').trim()
  }
]

module.exports = {
  reactStrictMode: false,
  webpack(config) {
    // if not work, try `config.module.rules[2]...`
    config.module.rules[3].oneOf.forEach((one) => {
      if (!`${one.issuer?.and}`.includes('_app')) return
      one.issuer.and = [path.resolve(__dirname)]
    })
    return config
  },
  images: {
    formats: ['image/avif', 'image/webp']
  },
  productionBrowserSourceMaps: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders
      }
    ]
  }
}
