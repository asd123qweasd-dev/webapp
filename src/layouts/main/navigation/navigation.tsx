import React, { FC } from 'react'
import styled from '@emotion/styled'
import { media } from '~/styles'
import Link from './link'

interface NavigationProps {
  hideOnMobile?: boolean
}
type NavigationType = FC<NavigationProps> & {
  Link: typeof Link
}
const _Navigation: NavigationType = ({hideOnMobile, children}) => {
  return (
    <Navigation hideOnMobile={hideOnMobile}>
      {children}
    </Navigation>
  )
}
_Navigation.Link = Link

const Navigation = styled.menu<{hideOnMobile?: boolean}>`
  display: ${props => props.hideOnMobile ? 'none' : 'flex'};
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0;
  padding-left: 0;
  padding-top: .6rem;
  ${media.tablet}{
    display: flex;
  }
`

export { _Navigation as Navigation }
