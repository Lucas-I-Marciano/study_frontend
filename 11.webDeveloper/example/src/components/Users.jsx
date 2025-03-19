import { useEffect, useState } from "react";
import { listUser, listUsers } from "../services/user";
import { NavLink, useParams } from "react-router";
import { useCustomSearchParams } from "../hooks/useCustomSearchParams";

export const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const response = async () => {
      const { data } = await listUsers();
      setUsers(data);
    };
    response();
  }, []);

  const { max, offset } = useCustomSearchParams();

  return (
    <div className="users">
      <NavLink to="/users">
        <h1>Users:</h1>
      </NavLink>
      {users.slice(offset, offset + max).map((user) => {
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
