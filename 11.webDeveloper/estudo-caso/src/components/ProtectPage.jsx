import { useAuth } from "../context/AuthC";

export const ProtectPage = () => {
  const userContext = useAuth();
  return (
    <div>
      <h1>ProtectPage</h1>
      <p>Hello {userContext.user}</p>
    </div>
  );
};
