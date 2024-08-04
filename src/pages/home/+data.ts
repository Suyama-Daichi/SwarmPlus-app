import { PageContextServer } from 'vike/types';
import { fetcher } from '../../fetcher';

export { data };
async function data(pageContext: PageContextServer & { accessToken: string }) {
  const userData = await fetcher(pageContext.accessToken, 'users/self').catch((e) => {
    console.error(e);
    return null;
  });
  return userData;
}