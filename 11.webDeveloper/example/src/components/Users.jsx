import { useEffect, useState } from "react";
import { listUser, listUsers } from "../services/user";
import { NavLink, useParams } from "react-router";
import { useCustomSearchParams } from "../hooks/useCustomSearchParams";
import { listPostsUser } from "../services/post";

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
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const response = async () => {
      const { data } = await listUser(id);
      setUsers(data);
    };

    const getPostsUser = async () => {
      const { data } = await listPostsUser(`?userId=${id}`);
      setPosts(data);
    };

    response();
    getPostsUser();
  }, [id]);
  return (
    <div className="user">
      <NavLink to="/users">
        <p>Back</p>
      </NavLink>
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

      <div className="user-posts">
        <h3>Posts of {user.name}</h3>
        {posts.map((post, index) => {
          return (
            <>
              <h5>
                {index + 1}. {post.title}
              </h5>
              <p>{post.body}</p>
            </>
          );
        })}
      </div>
    </div>
  );
};
