import React, { FC } from 'react'
import styled from '@emotion/styled'
import placeholderImage from '~/assets/placeholder-image.png'
import { media } from '~/styles'
import { lineClamp } from '~/styles/lineClamp'
import NextImage from 'next/image'
import NextLink from 'next/link'

export type ContentPosytion = 'top'|'bottom'|'left'|'right'
export type NewsItemColor = 'black'|'white'
interface NewsItemProps {
  title?: Maybe<string>
  text?: Maybe<string>
  image?: Maybe<string>
  company?: Maybe<string>
  createdAt?: Maybe<string>
  slug: Maybe<string>
  contentBg?: NewsItemColor
  contentColor?: NewsItemColor
  contentPosition?: ContentPosytion
  titleColor?: NewsItemColor
}

const _NewsItem: FC<NewsItemProps> = ({ slug,title,text,image,company,contentBg,contentColor,contentPosition,titleColor }) => {

  function getStyles() {
    const result = {
      left: 0,
      bottom: 0,
      background: 'black'
    }
    
    return result
  }

  return (
    <NextLink href={`/news/${slug}`}>
      <NewsItem>
        <NextImage 
          src={image || placeholderImage} 
          width={420}
          height={535}
          layout="fixed"
          objectFit="contain"
          objectPosition="50% 50%"
          alt={title || 'dnr.dev - изображение'}
        />
        <Content { ...getStyles() }>
          <Title>{ title }</Title>
          <Text>{ text }</Text>
        </Content>
        {/* <Footer>
          <CompanyName>{ company }</CompanyName>
          <CreatedAt>{ createdAt }</CreatedAt>
        </Footer> */}
      </NewsItem>
    </NextLink>
  )
}

const NewsItem = styled.div`
  max-width: 100%;
  border-radius: .6rem;
  overflow: hidden;
  width: 42rem;
  margin: 0 auto;
  cursor: pointer;
  position: relative;

  ${media.mobile__landscape} {
    border: 1px solid #D5D7DD;
    max-width: calc(50% - 1rem);
    height: 53.5rem;
  }
`
const Content = styled.div`
  position: absolute;
`
const Title = styled.div`
  font-weight: 800;
  font-size: 2rem;
  line-height: 2.4rem;
  margin-bottom: 2rem;
  display: block;
  height: 7.2rem;
  ${lineClamp(3)}
`
// const Image = styled(NextImage)`
//   width: 100%;
//   margin-bottom: 2rem;
//   height: 30rem;
//   ${media.tablet} {
//     height: 28rem;
//   }
// `
const Text = styled.div`
  margin-bottom: 2rem;
  font-size: 1.4rem;
  height: 6.6rem;
  opacity: .6;
  ${lineClamp(3)}
`
const Footer = styled.div`
  position:
  /* color: #8F95A3; */
  font-size: 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const CompanyName = styled.div``
const CreatedAt = styled.div``

export { _NewsItem as NewsItem2 }
