import { useEffect, useState } from "react";
import { listUser, listUsers } from "../services/user";
import { NavLink, useLocation, useParams } from "react-router";

export const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const response = async () => {
      const { data } = await listUsers();
      setUsers(data);
    };
    response();
  }, []);

  const { search } = useLocation();
  const urlSearchParam = new URLSearchParams(search);
  const max = parseInt(urlSearchParam.get("max"));
  const offset = parseInt(urlSearchParam.get("offset"));

  const maxElement = max ? max : 10;
  const offsetElement = offset ? offset : 0;

  return (
    <div className="users">
      <NavLink to="/users">
        <h1>Users:</h1>
      </NavLink>
      {users.slice(offsetElement, offsetElement + maxElement).map((user) => {
        return (
          <NavLink to={`/users/${user.id}`}>
            <p>{user.name}</p>
          </NavLink>
        );
      })}
    </div>
  );
};

export const User = () => {
  const { id } = useParams();
  const [user, setUsers] = useState([]);

  useEffect(() => {
    const response = async () => {
      const { data } = await listUser(id);
      setUsers(data);
    };
    response();
  }, [id]);
  return (
    <div className="user">
      <h1>User:</h1>
      {Object.keys(user).map((information) => {
        return (
          <>
            <span>{information}: </span>
            <span>{JSON.stringify(user[information])}</span>
            <br></br>
          </>
        );
      })}
      <NavLink to="/users">
        <p>Back</p>
      </NavLink>
    </div>
  );
};
