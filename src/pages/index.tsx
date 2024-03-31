import { FOURSQUARE_CLIENT_ID, FOURSQUARE_OATH_ENDPOINT } from '../constant';
import { makeQueryString } from '../utils';
import { useSearchParams } from 'react-router-dom';

function Index() {
  const queryString = makeQueryString({ client_id: FOURSQUARE_CLIENT_ID, response_type: 'code', redirect_uri: 'http://localhost:5173' });
  const [searchParams, setSearchParams] = useSearchParams();
  const authenticationCode = searchParams.get('code');

  if (authenticationCode) {return <>処理中</>;}
  return (
    <a href={`${FOURSQUARE_OATH_ENDPOINT}/authenticate?${queryString}`}>ログイン</a>
  );
}

export default Index;