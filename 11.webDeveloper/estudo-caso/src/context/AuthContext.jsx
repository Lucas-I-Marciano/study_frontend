import { AuthContext } from "./AuthC";

export const AuthProvider = (props) => {
  return (
    <AuthContext.Provider value={{ user: "Lucas" }}>
      {props.children}
    </AuthContext.Provider>
  );
};
