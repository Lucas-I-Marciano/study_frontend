import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const NeedAuth = ({ children }) => {
  const navigate = useNavigate();

  const userToken = localStorage.getItem("userToken");
  try {
    if (userToken | (userToken == null)) {
      throw Error;
    }
    jwtDecode(userToken);
  } catch {
    useEffect(() => {
      navigate("/login");
    });
  }
  return <>{children}</>;
};
