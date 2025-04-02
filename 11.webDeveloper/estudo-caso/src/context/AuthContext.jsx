import { useState } from "react";
import { AuthContext } from "./AuthC";

export const AuthProvider = (props) => {
  const [user, setUser] = useState("Default user");

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
