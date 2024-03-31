import useSWR from 'swr';
import { makeQueryString } from '../utils';
import { FOURSQUARE_CLIENT_ID, FOURSQUARE_OATH_ENDPOINT } from '../constant';
import axios from 'axios';

export const codeFetcher = async (path: string) => {
  const uri = `${FOURSQUARE_OATH_ENDPOINT}/${path}`;
  return await axios.get(uri).then((res) => {
    return res.data;
  });
};

export const useAuthentication = () => {
  const queryString = makeQueryString({ client_id: FOURSQUARE_CLIENT_ID, response_type: 'code', redirect_uri: 'http://localhost:5173' });
  const { data, error } = useSWR(`authenticate?${queryString}`, codeFetcher, { 'errorRetryCount': 0, revalidateOnFocus: false });
  console.log(data);
};