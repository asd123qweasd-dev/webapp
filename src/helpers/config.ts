import getConfig from 'next/config'

type Config = {
  ssrApiUrl: string
  clientApiUrl: string
  version: string
  S3_BASE_URL: string
  S3_STORAGE_URL: string
}
export function config ():Config {
  const APP_REF = process.env.NEXT_PUBLIC_APP_REF || 'local'
  const defaultConfig = getConfig()?.publicRuntimeConfig['master']
  const currentConfig = getConfig()?.publicRuntimeConfig[String(APP_REF)]
  return currentConfig || defaultConfig
}
