import React, { FC } from 'react'
import styled from '@emotion/styled'
import { Logo } from '../logo'
import { Navigation } from '../navigation'
import { container } from '~/styles/container'
import { Socials } from '../socials'
import { media } from '~/styles'
import { navigationLinks, socialLinks } from '~/data'

interface FooterProps {}

const _Footer: FC<FooterProps> = () => {
  return (
    <Footer>
      <Container>
        <Left>
          <Logo text version/>
          <Navigation>
            {navigationLinks.map(({id, href, name}) => {
              return (
                <Navigation.Link href={href} key={id} >
                  {name}
                </Navigation.Link>
              )
            })}
          </Navigation>
        </Left>
        <Right>
          <SubText>Наши соц сети</SubText>
          <Socials>
            {socialLinks.map(({id, icon, href, name}) => {
              return (
                <Socials.Link icon={icon} href={href} key={id} >
                  {name}
                </Socials.Link>
              )
            })}
          </Socials>
        </Right>
      </Container>
    </Footer>
  )
}

const Footer = styled.div`
  background: #292F3D;
  padding: 5rem 0 11.4rem;
  ${media.tablet} {
    padding: 5rem 0;
  }
`
const Container = styled.div`
  ${container}
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  ${media.tablet} {
    flex-direction: row;
  }
`
const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 3rem;
  ${media.tablet} {
    margin-bottom: 0rem;
    justify-content: flex-start;
    align-items: flex-start;
    padding-right: 7rem;
  }
`
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${media.tablet} {
    justify-content: flex-start;
    align-items: flex-start;
    padding-right: 7rem;
  }
`
const SubText = styled.div`
  color: #8F95A3;
  margin-bottom: 0.6rem;
`

export { _Footer as Footer }
