import { NavLink, useNavigate } from "react-router";

export const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem("userToken", "");
    navigate("/login");
  };
  return (
    <div>
      <h1>Bem vindo</h1>
      <ul>
        <li>
          <NavLink to="/public">Public</NavLink>
        </li>
        <li>
          <NavLink to="/private">Private</NavLink>
        </li>
        <button onClick={handleLogout}>Logout</button>
      </ul>
    </div>
  );
};
