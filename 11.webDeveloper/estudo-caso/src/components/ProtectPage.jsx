import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const ProtectPage = () => {
  const userToken = localStorage.getItem("userToken");
  const navigate = useNavigate();

  try {
    if (userToken | (userToken == null)) {
      throw Error;
    }
    const decoded = jwtDecode(userToken);
    console.log(decoded);
    return (
      <div>
        <h1>ProtectPage</h1>
      </div>
    );
  } catch {
    useEffect(() => {
      navigate("/login");
    });
  }
};
