import React, { FC } from 'react'
import styled from '@emotion/styled'
import NextLink from 'next/link'
import { useRouter } from 'next/dist/client/router'

interface LinkProps {
  href: string
}

const _Link: FC<LinkProps> = ({href, children}) => {
  const router = useRouter()

  function isActive(path:string) {
    const regexp = new RegExp(path)
    return regexp.test(router.pathname)
  }
  
  return (
    <NextLink href={href} passHref>
      <Link active={isActive(href)}>{children}</Link>
    </NextLink>
  )
}

const Link = styled.a<{active: boolean}>`
  color: ${props => props.active ? '#40a9ff' : '#fff'};
  text-transform: uppercase;
  margin: 0 1.2rem;
  font-size: 1.4rem;
  height: 100%;
  display: flex;
  border-bottom: .2rem solid ${props => props.active ? '#EA6712' : '#292F3D'};
  justify-content: center;
  align-items: center;
  transition: border-bottom-color .3s,opacity .3s, color .3s;

  :first-child{
    margin-left: 0;
  }
  :last-child{
    margin-right: 0;
  }

  :hover {
    border-bottom-color: #EA6712;
  }
`
export { _Link as Link }
