import type { AppProps /*, AppContext */ } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { theme } from '~/styles'
import { globalStyles } from '~/styles/global'
import { Provider } from 'react-redux'
import { store } from '~/store/index'
import { ConditionallyRender } from '~/components/ConditionallyRender'
import {MainLayout} from '~/layouts/main/'
import '~/assets/antd.css'
import '../../public/icons/png-sprite-style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ConditionallyRender client>
        <div className="svg-sprite" dangerouslySetInnerHTML={{ __html: require('~/../public/icons/svg-sprite.svg?include') }} />
      </ConditionallyRender>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {globalStyles()}
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default MyApp
