import { useEffect, useState } from "react";
import "./App.css";
import { listPosts } from "./services/post";
import { listUsers } from "./services/user";

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const response = async () => {
      const { data } = await listPosts();
      setPosts(data);
    };
    response();
  }, []);

  useEffect(() => {
    const response = async () => {
      const { data } = await listUsers();
      setUsers(data);
    };
    response();
  }, []);

  return (
    <>
      {posts.map((post) => {
        return <p>{post.title}</p>;
      })}
      {users.map((user) => {
        return <p>{user.name}</p>;
      })}
    </>
  );
}

export default App;
