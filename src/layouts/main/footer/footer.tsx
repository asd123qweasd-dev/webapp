import React, { FC } from 'react'
import styled from '@emotion/styled'
import { Logo } from '../logo'
import { Navigation } from '../Navigation'

interface FooterProps {}

const _Footer: FC<FooterProps> = () => {
  return (
    <Footer>
      <Left>
        <Logo />
        <Navigation links={[
          {name: 'Новости', url: '/news'},
          {name: 'События', url: '/events'},
          {name: 'Обучения', url: '/training'},
          {name: 'Работа', url: '/jobs'}
        ]}/>
      </Left>
      <Right>
        <SocialsTitle>Наши соц сети</SocialsTitle>
        <Socials>
          
        </Socials>
      </Right>
    </Footer>
  )
}

const Footer = styled.div`
  background: #292F3D;
  display: flex;
`
const Left = styled.div``
const Right = styled.div``
const SocialsTitle = styled.div``
const Socials= styled.div``

export { _Footer as Footer }
