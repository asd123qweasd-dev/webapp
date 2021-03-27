import styled from '@emotion/styled'
import React, { FC } from 'react'
import { navigationLinks } from '~/data'
import { media } from '~/styles'
import { Footer } from './footer'
import { Header } from './header'
import { MobileNavigation } from './mobileNavigation'

interface MainProps {}

const _Main: FC<MainProps> = () => {
  return (
    <Main>
      <MobileNavigation>
        {navigationLinks.map(({id, icon, href, name}) => {
          return (
            <MobileNavigation.Link icon={icon} href={href} key={id} >
              {name}
            </MobileNavigation.Link>
          )
        })}
      </MobileNavigation>
      <Header />
      <Content />
      <Footer />
    </Main>
  )
}

const Main = styled.div``
const Content = styled.div`
  min-height: calc(100vh - 36.5rem);
  ${media.tablet} {
    min-height: calc(100vh - 23.5rem);
  }
`

export { _Main as MainLayout }
