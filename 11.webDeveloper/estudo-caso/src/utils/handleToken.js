import { jwtDecode } from "jwt-decode";

export const handleToken = (callback, erroCallback) => {
  const userToken = localStorage.getItem("userToken");

  try {
    console.log("To tentando");
    if (userToken | (userToken == null)) {
      console.log("Vou dar erro");
      throw Error;
    }
    console.log("DEI CERTO");
    jwtDecode(userToken);
    callback();
  } catch {
    console.log("DEI ERRO");
    erroCallback();
  }
};
