import styled from '@emotion/styled'
import React, { FC } from 'react'
import { media } from '~/styles'
import { Footer } from './footer'
import { Header } from './header'

interface MainProps {}

const _Main: FC<MainProps> = () => {
  return (
    <Main>
      <Header />
      <Content />
      <Footer />
    </Main>
  )
}

const Main = styled.div``
const Content = styled.div`
  min-height: calc(100vh - 30.1rem);
  ${media.tablet} {
    min-height: calc(100vh - 23.5rem);
  }
`

export { _Main as MainLayout }
