import { FOURSQUARE_CLIENT_ID, FOURSQUARE_OATH_ENDPOINT } from '../../constant';
import { usePageContext } from '../../renderer/usePageContext';
import { makeQueryString } from '../../utils';
export { Page };

function Page() {
  const queryString = makeQueryString({ client_id: FOURSQUARE_CLIENT_ID, response_type: 'code', redirect_uri: 'http://localhost:3003' });
  const pageContext = usePageContext();
  const authCode = pageContext.urlParsed.search.code;

  if (authCode) {return <>処理中</>;}
  return (
    <a href={`${FOURSQUARE_OATH_ENDPOINT}/authenticate?${queryString}`}>ログイン</a>
  );
}