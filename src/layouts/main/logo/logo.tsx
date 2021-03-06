import React, { FC } from 'react'
import styled from '@emotion/styled'
import SvgIcon from '~/components/SvgIcon'
import Link from 'next/link'
import { config } from '~/helpers/config'

interface LogoProps {
  version?: boolean
  text?: boolean
}

const _Logo: FC<LogoProps> = ({version, text}) => {
  return (
    <Link href="/" passHref>
      <Logo>
        <LogoIcon name="logo" />
        { text &&
          <Text>
            DNR.dev { version && <Version>{config().version}</Version> }
          </Text>
        }
      </Logo>
    </Link>
  )
}

const Logo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity .3s, color .3s;
  color: #fff;
  :hover {
    color: #fff;
    * {
      opacity: .7;
    }
  }
`
const Text = styled.div`
  font-weight: 600;
  font-size: 2rem;
  line-height: 2rem;
  transition: opacity .3s, color .3s;
`
const Version = styled.span`
  font-weight: 400;
  font-size: 1rem;
  line-height: 0;
  transition: opacity .3s, color .3s;
`
const LogoIcon = styled(SvgIcon)`
  font-size: 3.4rem;
  margin-right: .5rem;
  color: #fff;
  transition: opacity .3s, color .3s;
`

export { _Logo as Logo }
