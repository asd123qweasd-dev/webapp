import React, { FC } from 'react'
import styled from '@emotion/styled'
import { media } from '~/styles'
import { Link } from './link'

interface MobileNavigationProps {}

type MobileNavigationType = FC<MobileNavigationProps> & {
  Link: typeof Link
}

const _MobileNavigation: MobileNavigationType = ({children}) => {
  return (
    <MobileNavigation>
      {children}
    </MobileNavigation>
  )
}
_MobileNavigation.Link = Link

const MobileNavigation = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 6.4rem;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;

  ${media.tablet}{
    display: none;
  }
`
export { _MobileNavigation as MobileNavigation }

