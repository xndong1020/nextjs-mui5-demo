const path = require('path')

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
  productionBrowserSourceMaps: true
}
