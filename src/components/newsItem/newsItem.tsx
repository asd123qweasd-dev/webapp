import React, { CSSProperties, FC } from 'react'
import styled from '@emotion/styled'
import placeholderImage from '~/assets/placeholder-image.png'
import { media } from '~/styles'
import { lineClamp } from '~/styles/lineClamp'


interface NewsItemProps {
  title?: string
  text?: string
  image?: string
  company?: string
  createdAt?: string
}

const _NewsItem: FC<NewsItemProps> = ({ title, text, image, company, createdAt, ...rest }) => {
  return (
    <NewsItem { ...rest }>
      <Title>{ title }</Title>
      <Image src={image || placeholderImage} />
      <Text>{ text }</Text>
      <Footer>
        <CompanyName>{ company }</CompanyName>
        <CreatedAt>{ createdAt }</CreatedAt>
      </Footer>
    </NewsItem>
  )
}

const NewsItem = styled.div`
  max-width: 100%;
  border-radius: .6rem;

  ${media.tablet} {
    padding: 3.2rem;
    border: 1px solid #D5D7DD;
    width: calc(50% - 1rem);
    height: 56.4rem;
  }
`
const Title = styled.div`
  font-weight: 800;
  font-size: 2rem;
  line-height: 2.4rem;
  margin-bottom: 2rem;
  ${lineClamp(3)}
`
const Image = styled.img`
  width: 100%;
  margin-bottom: 2rem;
  height: 30rem;
  ${media.tablet} {
    height: 28rem;
  }
`
const Text = styled.div`
  margin-bottom: 2rem;
  font-size: 1.4rem;
  ${lineClamp(3)}
`
const Footer = styled.div`
  color: #8F95A3;
  font-size: 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const CompanyName = styled.div``
const CreatedAt = styled.div``

export { _NewsItem as NewsItem }
