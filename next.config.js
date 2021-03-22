const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  optimizeImages: false,
  publicRuntimeConfig: {
    'local': { // дефолт
      ssrApiUrl: 'https://dnr.dev/api',
      clientApiUrl: 'https://dnr.dev/api'
    },
    'master': {
      ssrApiUrl: 'https://dnr.dev/api',
      clientApiUrl: 'https://dnr.dev/api'
    },
    'dev': {
      ssrApiUrl: 'https://dnr.dev/api',
      clientApiUrl: 'https://dnr.dev/api'
    }
  },
  images: {
    domains: ['dnr.dev', 'localhost'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  }
})
