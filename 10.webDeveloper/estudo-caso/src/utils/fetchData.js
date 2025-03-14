export const fetchData = async (endpoint) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/${endpoint}`
  );
  const jsonResponse = await response.json();
  return jsonResponse;
};
