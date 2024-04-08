import { PageContextServer } from 'vike/types';
import { makeQueryString } from '../../utils';
import { FOURSQUARE_CLIENT_ID, FOURSQUARE_CLIENT_SECRET } from '../../constant';
import { oathFetcher } from '../../fetcher';
import { AccessToken } from '../../types/Foursquare';


type AccessTokenResponse = {
  accessToken?: string
}

async function data(pageContext: PageContextServer): Promise<AccessTokenResponse> {
  const oathCode = pageContext.urlParsed.search.code;
  if (!oathCode) return { accessToken: undefined };
  const queryString = makeQueryString({
    client_id: FOURSQUARE_CLIENT_ID, client_secret: FOURSQUARE_CLIENT_SECRET, redirect_uri: 'http://localhost:3003', code: oathCode, grant_type: 'authorization_code'
  });
  const response = await oathFetcher<AccessToken>(`access_token?${queryString}`).catch((e)=> console.error(e));
  const accessToken = response?.access_token;
  return {
    accessToken: accessToken
  };
}

export { data };

export type Data = Awaited<ReturnType<typeof data>>