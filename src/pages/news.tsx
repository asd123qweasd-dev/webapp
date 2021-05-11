import { GetStaticProps } from 'next';
import React from 'react';
import { useGetPosts } from '~/hooks/useGetPosts';
import { NewsView } from '~/views/news';
import Head from 'next/head'
import api from '~/api';

export default function news (props:any) {
  useGetPosts({initialData: JSON.parse(props.posts)})
  return (
    <>
      <Head>
        <title>DNR.dev - Новости</title>
        <meta name="keywords" content="DNR.dev - Новости" />
        <meta name="description" content="DNR.dev - Новости" />
        {/* <meta name='wmail-verification' content='d79745707d69ba4bf2a89eae68b88ee2' />
        <meta name="msvalidate.01" content="F258084A0600BD45BDF0C6F8CFDE780D" />
        <meta name='mysitecost.ru' content='addurl' />
        <meta name="yandex-verification" content="5b82cf7b834020df" /> */}
      </Head>
      <NewsView />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const {data:posts} = await api.posts.getSiteAll()
  
  return {
    props: {
      posts: JSON.stringify(posts)
    }
  }
}
