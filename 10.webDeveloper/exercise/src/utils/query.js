export const query = async (endpoint) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/${endpoint}`
  );
  const responseJson = await response.json();
  return responseJson;
};
