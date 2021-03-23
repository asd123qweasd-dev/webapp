import type { AppProps /*, AppContext */ } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { theme } from '~/styles'
import { globalStyles } from '~/styles/global'
import { Provider } from 'react-redux'
import store from '~/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {globalStyles()}
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
