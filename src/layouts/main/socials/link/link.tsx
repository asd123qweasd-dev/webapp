import React, { FC } from 'react'
import styled from '@emotion/styled'
import SvgIcon from '~/components/SvgIcon'

interface LinkProps {
  icon: string
  href: string
}

const _Link: FC<LinkProps> = ({icon, href, children}) => {
  return (
    <Wrap>
      <Icon name={icon}/>
      <Link href={href} target="_blank">{children}</Link>
    </Wrap>
  )
}

const Wrap = styled.div`
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 1rem;

  :first-child{
    margin-left: 0;
  }
  :last-child{
    margin-right: 0;
  }
`
const Link = styled.a`
  color: #fff;
`
const Icon = styled(SvgIcon)`
  margin-right: .5rem;
`

export { _Link as Link }
