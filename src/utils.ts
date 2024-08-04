export const makeQueryString = <T>(queryObject: T) => {
  const sanitizedQueryObject = Object.fromEntries(
    Object.entries(queryObject as Record<string, string>).filter(([_, value]) => value !== undefined),
  );

  const queryString = new URLSearchParams(sanitizedQueryObject as Record<string, string>).toString();
  return queryString;
};

export const getObjectFromString = (inputString: string) => {
  // 文字列を '=' で分割し、オブジェクトを作成
  const parts = inputString.split('=');
  const obj = {} as Record<string, string>;
  obj[parts[0]] = parts[1];
  return obj;
};