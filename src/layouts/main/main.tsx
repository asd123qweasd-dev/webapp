import styled from '@emotion/styled'
import React, { FC } from 'react'
import { Header } from './header'

interface MainProps {}

const _Main: FC<MainProps> = () => {
  return (
    <Main>
      <Header />
    </Main>
  )
}

const Main = styled.div``

export { _Main as MainLayout }
