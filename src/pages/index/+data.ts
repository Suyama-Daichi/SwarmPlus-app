import { PageContext } from 'vike/types';
import { makeQueryString } from '../../utils';
import { FOURSQUARE_CLIENT_ID, FOURSQUARE_CLIENT_SECRET } from '../../constant';
import { oathFetcher } from '../../fetcher';
import { AccessToken } from '../../types/Foursquare';

export { data };

async function data(pageContext: PageContext) {
  const oathCode = pageContext.urlParsed.search.code;
  if (!oathCode) return;
  const queryString = makeQueryString({ 
    client_id: FOURSQUARE_CLIENT_ID, client_secret: FOURSQUARE_CLIENT_SECRET, redirect_uri: 'http://localhost:3003', code: oathCode, grant_type: 'authorization_code'
  });
  const response = await oathFetcher<AccessToken>(`access_token?${queryString}`).catch((e)=> console.error(e));

  const accessToken = response?.access_token;

  return {
    accessToken: accessToken
  };
}