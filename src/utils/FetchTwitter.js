export default async (route, body, method = false) => {
  // console.log(route, method, body);

  const headers = {
    "Content-Type": "application/json",
  };

  // if (authHeader) {
  //   let token = await SecureStorage.getItem('token');

  //   // console.log('token => ', token);
  //   headers[
  //     "Authorization"
  //   ] = `Bearer AAAAAAAAAAAAAAAAAAAAANpTRwEAAAAAGl0BdQWfcWJWBh0EJHgNFymrnpw%3DGklAxhDYiemoE7tpkyZNnIrGs2dNMvK8PtRUjww5b31D0hNbf5`;

  //   if (token) {
  //   }

  //   console.log('Headers => ', headers, route);
  // }

  const response = await fetch(`${route}`, {
    method: method ? method : "post",
    headers,
    body: body && JSON.stringify(body),
  });

  const responseJSON = await response.json();
  console.log(responseJSON);
  return { payload: responseJSON, status: response.status };
};
