import React, { FC } from 'react'
import styled from '@emotion/styled'
import NewsItemComponent from '~/components/newsItem2'
import { media } from '~/styles'
import { useGetPosts } from '~/hooks/useGetPosts'
import { getS3ImageUrl } from '~/helpers/getS3ImageUrl'
import { formatDate } from '~/helpers/formatDate'
import { Container } from '~/styles/container'

interface NewsViewProps {}

const _NewsView: FC<NewsViewProps> = () => {
  const { data:posts } = useGetPosts()
  
  return (
    <Container>
      <NewsView>
        <Title>Новости</Title>
        <NewsWrap>
          { posts?.data.map(item => {
            return (
              <NewsItem
                key={item.id}
                slug={item.slug}
                title={item.name}
                text={item.intro}
                image={getS3ImageUrl(item.image)}
                company={item.author.name}
                contentBg="black"
                contentColor="black"
                titleColor="black"
                contentPosition="bottom"
              />
            )
          })}
        </NewsWrap>
      </NewsView>
    </Container>
  )
}

const NewsView = styled.div`
  padding: 2rem 0;
`

const Title = styled.h1``
const NewsWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`
const NewsItem = styled(NewsItemComponent)`
  margin-bottom: 5rem;

  ${media.tablet} {
    margin-bottom: 2rem;
    margin-right: 1rem;
    :nth-child(2n) {
      margin-left: 1rem;
      margin-right: 0;
    }
  }
`

export { _NewsView as NewsView }
