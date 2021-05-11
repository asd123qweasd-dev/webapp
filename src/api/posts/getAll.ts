import { AxiosPromise } from "axios";
import axios from "~/lib/axios";
import { Post } from ".";
import { ApiPagination } from "~/api";


export function getAll(): AxiosPromise<ApiPagination<Post>> {
  return axios({
    url: '/posts',
    method: 'get'
  })
}

export function getSiteAll(): AxiosPromise<ApiPagination<Post>> {
  return axios({
    url: '/site/posts',
    method: 'get'
  })
}
