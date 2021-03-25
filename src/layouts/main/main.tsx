import styled from '@emotion/styled'
import React, { FC } from 'react'
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
const Content = styled.div``

export { _Main as MainLayout }
