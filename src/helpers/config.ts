import getConfig from 'next/config'

type Config = {
  ssrApiUrl: string
  clientApiUrl: string
  version: string
}
export function config ():Config {
  const APP_REF = process.env.NEXT_PUBLIC_APP_REF || 'local'
  const defaultConfig = getConfig()?.publicRuntimeConfig['master']
  const currentConfig = getConfig()?.publicRuntimeConfig[String(APP_REF)]
  return currentConfig || defaultConfig
}
