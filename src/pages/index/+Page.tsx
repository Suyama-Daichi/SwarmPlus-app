import { useEffect } from 'react';
import { FOURSQUARE_CLIENT_ID, FOURSQUARE_OATH_ENDPOINT } from '../../constant';
import { useData } from '../../renderer/useData';
import { usePageContext } from '../../renderer/usePageContext';
import { makeQueryString } from '../../utils';
import { type Data } from './+data';
import { navigate } from 'vike/client/router';
import Cookies from 'js-cookie';

export { Page };

function Page() {
  const queryString = makeQueryString({ client_id: FOURSQUARE_CLIENT_ID, response_type: 'code', redirect_uri: 'http://localhost:3003' });
  const pageContext = usePageContext();
  const authCode = pageContext.urlParsed.search.code;
  const data = useData<Data>();
  const accessToken = data.accessToken;

  useEffect(() => {
    if (!accessToken) return;
    Cookies.set('accessToken', accessToken);
    navigate('/home');
  }, [accessToken, pageContext]);

  if (authCode) {return <>処理中</>;}
  return (
    <a href={`${FOURSQUARE_OATH_ENDPOINT}/authenticate?${queryString}`}>ログイン</a>
  );
}