import { jwtDecode } from "jwt-decode";

export const handleToken = (callback, erroCallback) => {
  const userToken = localStorage.getItem("userToken");

  try {
    if (userToken | (userToken == null)) {
      throw Error;
    }
    jwtDecode(userToken);
    callback();
  } catch {
    erroCallback();
  }
};
