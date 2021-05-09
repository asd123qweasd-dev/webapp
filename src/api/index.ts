import { posts } from './posts'
import { users } from './users'
import { category } from './category'
import { auth } from './auth'

export type ApiPaginationLinks = {
  first: Maybe<string>
  last: Maybe<string>
  prev: Maybe<string>
  next: Maybe<string>
}
export type ApiPaginationMetaLinks = {
  url: Maybe<string>
  label: string
  active: boolean
}
export type ApiPaginationMeta = {
  current_page: number
  from: number
  last_page: number
  links: ApiPaginationMetaLinks[]
  path: string
  per_page: number
  to: number
  total: number
}
export type ApiPagination<T> = {
  data: T[] | undefined
  links: ApiPaginationLinks
  meta: ApiPaginationMeta
}

export const api = {
  auth,
  posts,
  users,
  category
}

export default api


