import { useEffect, useState } from "react";
import { listUser, listUsers } from "../services/user";
import { useParams } from "react-router";

export const Users = ({ numUsers }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const response = async () => {
      const { data } = await listUsers(1);
      setUsers(data);
    };
    response();
  }, []);
  return (
    <div className="users">
      <h1>Users:</h1>
      {users.slice(0, numUsers).map((user) => {
        return <p>{user.name}</p>;
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
  }, []);
  return (
    <div className="user">
      <h1>Users:</h1>
      {Object.keys(user).map((information) => {
        return (
          <>
            <span>{information}: </span>
            <span>{JSON.stringify(user[information])}</span>
            <br></br>
          </>
        );
      })}
    </div>
  );
};
