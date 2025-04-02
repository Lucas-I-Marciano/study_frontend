import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

instance.interceptors.request.use((config) => {
  const userToken = localStorage.getItem("userToken");

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: userToken ? `Bearer ${userToken}` : "",
    },
  };
});

export default instance;
