export const BaseAPI = async <T>(URL: string | URL | Request, method = 'GET'): Promise<T> => {
  const response = await fetch(URL, {
    method,
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.message || `Error ${response.status}`);
  }

  const responseJson = await response.json() as T;
  return responseJson;
};
