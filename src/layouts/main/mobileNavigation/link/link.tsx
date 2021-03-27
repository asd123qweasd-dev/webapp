import React, { FC } from 'react'
import styled from '@emotion/styled'
import Nextlink from 'next/link'
import { SvgIcon } from '~/components/SvgIcon'
import { css } from '@emotion/react'

interface LinkProps {
  icon: string
  href: string
}

const _Link: FC<LinkProps> = ({icon, href, children}) => {
  return (
    <Nextlink href={href} passHref>
      <Link>
        <Icon name={icon}/>
        <Text>{children}</Text>
      </Link>
    </Nextlink>
  )
}

const Link = styled.a`
  color: #356DFB;
  flex-direction: column;
  align-items: center;
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
`
const Text = styled.div``

const Icon = styled(SvgIcon)<{name: string}>`
  font-size: 2.5rem;

  ${props => props.name === 'bachelor2' && css`
    font-size: 2.9rem;
  `}
`
export { _Link as Link }
