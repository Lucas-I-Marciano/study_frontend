import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { authService } from "../services/auth";
import { jwtDecode } from "jwt-decode";

export const Login = () => {
  const [email, setEmail] = useState(null);

  const userToken = localStorage.getItem("userToken");
  const navigate = useNavigate();

  try {
    if (userToken | (userToken == null)) {
      throw Error;
    }
    jwtDecode(userToken);
    useEffect(() => {
      navigate("/");
    }, []);
  } catch {
    console.log("");
  }
  const submitEvent = (event) => {
    event.preventDefault();
    var data = new FormData(event.target);
    for (var [key, value] of data) {
      if (key === "email") {
        setEmail(value);
      }
    }
  };

  useEffect(() => {
    const toQuery = async () => {
      const response = await authService({ email: email });
      const toStorage = response.data?.token ? response.data.token : "";
      localStorage.setItem("userToken", toStorage);
      if (toStorage) {
        navigate("/");
      }
    };
    if (email && email !== null) {
      toQuery();
    }
  }, [email]);
  return (
    <div>
      <form onSubmit={submitEvent}>
        <label>
          Email:
          <input name="email" type="text"></input>
        </label>
        <label>
          Password:
          <input name="password" type="password"></input>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
