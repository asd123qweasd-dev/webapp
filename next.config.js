const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  optimizeImages: false,
  publicRuntimeConfig: {
    'local': { // dev режим
      ssrApiUrl: 'http://31.133.50.50:8080/api',
      clientApiUrl: 'http://31.133.50.50:8080/api',
      version: 'dev',
      'S3_BASE_URL': 'https://s3.dnr.dev',
      'S3_STORAGE_URL': 'https://dnr-dev.storage.yandexcloud.net/'
    },
    'master': {
      ssrApiUrl: 'https://dnr.dev/api',
      clientApiUrl: 'https://dnr.dev/api',
      version: process.env.NEXT_PUBLIC_APP_VERSION,
      'S3_BASE_URL': 'https://s3.dnr.dev',
      'S3_STORAGE_URL': 'https://dnr-dev.storage.yandexcloud.net/'
    },
    'alpha': {
      ssrApiUrl: 'https://alpha.dnr.dev/api',
      clientApiUrl: 'https://alpha.dnr.dev/api',
      version: process.env.NEXT_PUBLIC_APP_VERSION,
      'S3_BASE_URL': 'https://s3.dnr.dev',
      'S3_STORAGE_URL': 'https://dnr-dev.storage.yandexcloud.net/'
    }
  },
  images: {
    domains: ['dnr.dev', 'localhost', 'dnr-dev.storage.yandexcloud.net'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  }
})
