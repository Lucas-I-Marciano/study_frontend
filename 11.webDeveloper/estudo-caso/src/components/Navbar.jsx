import { NavLink } from "react-router";

const handleLogout = () => {
  localStorage.setItem("userToken", "");
};

export const Navbar = () => {
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
