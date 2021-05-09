import axios from 'axios'
import { getSession } from '~/helpers/session';
import {apiErrorHandler} from '~/helpers/apiErrorHandler'
import { isServer } from '~/helpers/is';
import { config } from '~/helpers/config';


const instance = axios.create({
  baseURL: isServer() ? config().ssrApiUrl : config().clientApiUrl
})

instance.interceptors.request.use(function (config) {
  const session = getSession()
  if (session) config.headers['Authorization'] = `Bearer ${session.access_token}`
  return config;
}, function (error) {
  return Promise.reject(error);
});


instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  apiErrorHandler(error)
  return Promise.reject(error);
});

const defaultFetcher = (url: string) => instance.get(url).then(res => res.data)

export default instance
export {
  instance as axios,
  defaultFetcher
}
