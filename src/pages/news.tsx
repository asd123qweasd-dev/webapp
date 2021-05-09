import { GetStaticProps } from 'next';
import React from 'react';
import api from '~/api';
import { useGetPosts } from '~/hooks/useGetPosts';
import { Container } from '~/styles/container';
import { NewsView } from '~/views/news';


export default function news (props:any) {
  useGetPosts({initialData: JSON.parse(props.posts)})
  return (
    <Container>
      <NewsView />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const {data:posts} = await api.posts.getAll()
  
  return {
    props: {
      posts: JSON.stringify(posts)
    }
  }
}
