import { config } from '~/helpers/config';

export function getS3ImageUrl(url?: Maybe<string>) {
  if (!url) return null
  return `${config().S3_STORAGE_URL}${url}`
}
