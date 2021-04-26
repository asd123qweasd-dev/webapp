import React, { FC } from 'react'
import styled from '@emotion/styled'
import NewsItemComponent from '~/components/newsItem'
import { media } from '~/styles'

interface NewsViewProps {}

const _NewsView: FC<NewsViewProps> = () => {
  
  return (
    <NewsView>
      <Title>Новости</Title>
      <NewsWrap>
        <NewsItem
          title={'Ответ Android. Операционная система от Huawei появится на смартфонах в 2020 году'}
          text={'Президент Huawei доктор Ван Чэн Лу заявил на конференции разработчиков, что операционная система HarmonyOS начнет появляться на смартфонах компании в следующем году.'}
          image={undefined}
          company={'IT Company Name'}
          createdAt={'12.12.2019'}
        />
        <NewsItem
          title={'Ответ Android. Операционная система от Huawei появится на смартфонах в 2020 году'}
          text={'Президент Huawei доктор Ван Чэн Лу заявил на конференции разработчиков, что операционная система HarmonyOS начнет появляться на смартфонах компании в следующем году.'}
          image={undefined}
          company={'IT Company Name'}
          createdAt={'12.12.2019'}
        />
        <NewsItem
          title={'Ответ Android. Операционная система от Huawei появится на смартфонах в 2020 году'}
          text={'Президент Huawei доктор Ван Чэн Лу заявил на конференции разработчиков, что операционная система HarmonyOS начнет появляться на смартфонах компании в следующем году.'}
          image={undefined}
          company={'IT Company Name'}
          createdAt={'12.12.2019'}
        />
        <NewsItem
          title={'Ответ Android. Операционная система от Huawei появится на смартфонах в 2020 году'}
          text={'Президент Huawei доктор Ван Чэн Лу заявил на конференции разработчиков, что операционная система HarmonyOS начнет появляться на смартфонах компании в следующем году.'}
          image={undefined}
          company={'IT Company Name'}
          createdAt={'12.12.2019'}
        />
        <NewsItem
          title={'Ответ Android. Операционная система от Huawei появится на смартфонах в 2020 году'}
          text={'Президент Huawei доктор Ван Чэн Лу заявил на конференции разработчиков, что операционная система HarmonyOS начнет появляться на смартфонах компании в следующем году.'}
          image={undefined}
          company={'IT Company Name'}
          createdAt={'12.12.2019'}
        />
        <NewsItem
          title={'Ответ Android. Операционная система от Huawei появится на смартфонах в 2020 году'}
          text={'Президент Huawei доктор Ван Чэн Лу заявил на конференции разработчиков, что операционная система HarmonyOS начнет появляться на смартфонах компании в следующем году.'}
          image={undefined}
          company={'IT Company Name'}
          createdAt={'12.12.2019'}
        />
        <NewsItem
          title={'Ответ Android. Операционная система от Huawei появится на смартфонах в 2020 году'}
          text={'Президент Huawei доктор Ван Чэн Лу заявил на конференции разработчиков, что операционная система HarmonyOS начнет появляться на смартфонах компании в следующем году.'}
          image={undefined}
          company={'IT Company Name'}
          createdAt={'12.12.2019'}
        />
      </NewsWrap>
    </NewsView>
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
