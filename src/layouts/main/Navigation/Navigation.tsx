import React, { FC } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { media } from '~/styles'

interface NavigationProps {
  links: LinkItem[]
}

interface LinkItem {
  name: string
  url: string
}

const _Navigation: FC<NavigationProps> = ({links}) => {
  const router = useRouter()

  function isActive(path:string) {
    const regexp = new RegExp(path)
    return regexp.test(router.pathname)
  }

  return (
    <Navigation>
      {links.map((item, key) => {
        return (
          <Link href={item.url} passHref key={key}>
            <Item active={isActive(item.url)}>{item.name}</Item>
          </Link>
        )
      })}
    </Navigation>
  )
}

const Navigation = styled.menu`
  display: none;
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
const Item = styled.a<{active: boolean}>`
  color: ${props => props.active ? '#EA6712' : '#fff'};
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

export { _Navigation as Navigation }
