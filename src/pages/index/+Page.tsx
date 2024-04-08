import { useEffect } from 'react';
import { FOURSQUARE_CLIENT_ID, FOURSQUARE_OATH_ENDPOINT } from '../../constant';
import { useData } from '../../renderer/useData';
import { usePageContext } from '../../renderer/usePageContext';
import { makeQueryString } from '../../utils';
import { type Data } from './+data';
import { navigate } from 'vike/client/router';
export { Page };

function Page() {
  const queryString = makeQueryString({ client_id: FOURSQUARE_CLIENT_ID, response_type: 'code', redirect_uri: 'http://localhost:3003' });
  const pageContext = usePageContext();
  const data = useData<Data>();
  const authCode = pageContext.urlParsed.search.code;
  const accessToken = data.accessToken;
  console.log(accessToken);

  useEffect(() => {
    if (!accessToken) return;
    localStorage.setItem('accessToken', accessToken);
    navigate('/home');
  }, [accessToken]);

  if (authCode) {return <>処理中</>;}
  return (
    <a href={`${FOURSQUARE_OATH_ENDPOINT}/authenticate?${queryString}`}>ログイン</a>
  );
}