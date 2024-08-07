import axios, { AxiosError } from 'axios';
import { FOURSQUARE_API_ENDPOINT, FOURSQUARE_OATH_ENDPOINT, FOURSQUARE_API_VERSION } from './constant';

export class ApiError extends Error {
  status?: string;
  url?: string;
}

// デフォルト config の設定
export const axiosClient = axios.create({
  timeout: 30000,
});

axiosClient.interceptors.request.use(async (config) => {
  // config.headers.set('Authorization', Cookies.get(COOKIE_KEYS.ACCESS_TOKEN));
  // config.headers.set('idToken', Cookies.get(COOKIE_KEYS.ID_TOKEN));
  return config;
});

axiosClient.interceptors.response.use(
  async (res) => {
    return res;
  },
  (e: AxiosError) => {
    if (!e.response) {
      throw e;
    }
    throw e;
  },
);
export const oathFetcher = async <T>(path: string): Promise<T> => {
  const uri = `${FOURSQUARE_OATH_ENDPOINT}/${path}`;
  return await axios.get(uri).then((res) => {
    return res.data;
  });
};
export const fetcher = async (oauthToken:string, path: string) => {
  const uri = `${FOURSQUARE_API_ENDPOINT}/v2/${path}?oauth_token=${oauthToken}&v=${FOURSQUARE_API_VERSION}`;
  return await axiosClient.get(uri).then((res) => {
    return res.data;
  });
};

export const sendPostRequest = async <T>(path: string, { arg }: { arg: T }) => {
  const uri = `${FOURSQUARE_API_ENDPOINT}/${path}`;
  return await axiosClient.post(uri, arg).then((res) => {
    return res.data;
  });
};

export const sendPutRequest = async <T>(path: string, { arg }: { arg: T }) => {
  const uri = `${FOURSQUARE_API_ENDPOINT}/${path}`;
  return await axiosClient.put(uri, arg).then((res) => {
    return res.data;
  });
};

export const sendDeleteRequest = async <T>(path: string, { arg }: { arg: T }) => {
  const uri = `${FOURSQUARE_API_ENDPOINT}/${path}/${arg}`;

  return await axiosClient.delete(uri).then((res) => {
    return res.data;
  });
};
