import { useEffect, useState } from "react";
import "./App.css";
import { listPosts } from "./services/post";
import { listUsers } from "./services/user";
import { listTodos } from "./services/todo";

import { Post } from "./components/Post";
import { Users } from "./components/Users";

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);

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

  useEffect(() => {
    const response = async () => {
      const { data } = await listTodos();
      console.log(data);
      setTodos(data);
    };
    response();
  }, []);

  return (
    <>
      <Post posts={posts} numPosts={4}></Post>
      <Users users={users} numUsers={4}></Users>
      <h1>User:</h1>
      {users.slice(0, 10).map((user) => {
        return <p>{user.name}</p>;
      })}
      <h1>To do:</h1>
      {todos.slice(0, 10).map((todo) => {
        return <p>{todo.title}</p>;
      })}
    </>
  );
}

export default App;
