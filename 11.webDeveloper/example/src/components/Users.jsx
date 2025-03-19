import { useEffect, useState } from "react";
import { listUsers } from "../services/user";

listUsers;

export const Users = ({ numUsers }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const response = async () => {
      const { data } = await listUsers();
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
