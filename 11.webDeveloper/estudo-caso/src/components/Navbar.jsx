import { NavLink } from "react-router";

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
      </ul>
    </div>
  );
};
