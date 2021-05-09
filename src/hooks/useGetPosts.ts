import useSWR, { mutate, SWRConfiguration } from 'swr'
import { ApiPagination } from '~/api'
import { Post } from '~/api/posts'
import { defaultFetcher } from '~/lib/axios'


export function useGetPosts(config?: SWRConfiguration) {
  // Если есть кэш - инициализируем, (для SSR)
  config?.initialData && mutate('/posts', config.initialData)
  // запрашиваем данные
  const { data, error } = useSWR<ApiPagination<Post>>(`/posts`, defaultFetcher, config)

  return {
    data,
    loading: !error && !data,
    error
  }
}
