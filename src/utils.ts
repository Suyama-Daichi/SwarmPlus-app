export const makeQueryString = <T>(queryObject: T) => {
  const sanitizedQueryObject = Object.fromEntries(
    Object.entries(queryObject as Record<string, string>).filter(([_, value]) => value !== undefined),
  );

  const queryString = new URLSearchParams(sanitizedQueryObject as Record<string, string>).toString();
  return queryString;
};