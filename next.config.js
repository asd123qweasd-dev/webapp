const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  optimizeImages: false,
  publicRuntimeConfig: {
    'local': { // dev режим
      ssrApiUrl: 'https://dnr.dev/api',
      clientApiUrl: 'https://dnr.dev/api',
      version: 'dev'
    },
    'master': {
      ssrApiUrl: 'https://dnr.dev/api',
      clientApiUrl: 'https://dnr.dev/api',
      version: process.env.NEXT_PUBLIC_APP_VERSION
    },
    'alpha': {
      ssrApiUrl: 'https://dnr.dev/api',
      clientApiUrl: 'https://dnr.dev/api',
      version: process.env.NEXT_PUBLIC_APP_VERSION
    }
  },
  images: {
    domains: ['dnr.dev', 'localhost'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  }
})
