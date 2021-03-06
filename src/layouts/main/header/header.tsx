import React, { FC } from 'react'
import styled from '@emotion/styled'
import { media } from '~/styles'
import Logo from '~/layouts/main/logo'
import { Navigation } from '../navigation'
import SvgIcon from '~/components/SvgIcon'
import { container } from '~/styles/container'
import { navigationLinks } from '~/data'

interface HeaderProps {}

const _Header: FC<HeaderProps> = () => {
  return (
    <Header>
      <Container>
        <Logo text/>
        <Navigation hideOnMobile>
          {navigationLinks.map(({id, href, name}) => {
            return (
              <Navigation.Link href={href} key={id} >
                {name}
              </Navigation.Link>
            )
          })}
        </Navigation>
        <Logout>
          <LogoutIcon name="user"/>
        </Logout>
      </Container>
    </Header>
  )
}

const Header = styled.div`
  background: #292F3D;
  height: 5.1rem;
  ${media.tablet}{
    height: 7.1rem;
  }
`
const Container = styled.div`
  ${container}
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logout = styled.div`
  padding: 1rem;
  cursor: pointer;
  color: #fff;
  transition: color .3s;
  display: flex;
  align-items: center;
  
  :hover {
    color: #8F95A3
  }
`
const LogoutIcon = styled(SvgIcon)`
  font-size: 2rem;
`

export { _Header as Header }
