import type { AppProps /*, AppContext */ } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { theme } from '~/styles'
import { globalStyles } from '~/styles/global'
import { Provider } from 'react-redux'
import store from '~/store'
import { ConditionallyRender } from '~/components/ConditionallyRender'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ConditionallyRender client>
        <div className="svg-sprite" dangerouslySetInnerHTML={{ __html: require('~/../public/icons/svg-sprite.svg?include') }} />
      </ConditionallyRender>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {globalStyles()}
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default MyApp
