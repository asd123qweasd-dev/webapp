import React, { FC } from 'react'
import styled from '@emotion/styled'
import {Link} from './link'

interface SocialsProps {}

type SocialsType = FC<SocialsProps> & {
  Link: typeof Link
}

const _Socials: SocialsType = ({children}) => {
  return (
    <Socials>
      {children}
    </Socials>
  )
}

_Socials.Link = Link

const Socials = styled.div`
  display: flex;
`

export { _Socials as Socials }
