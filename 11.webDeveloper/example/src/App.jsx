import { useEffect, useState } from "react";
import "./App.css";
import { listTodos } from "./services/todo";

import { Post } from "./components/Post";
import { Users } from "./components/Users";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

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
      <Post numPosts={4}></Post>
      <Users numUsers={5}></Users>
      <Todos todos={todos} numTodos={6}></Todos>
    </>
  );
}

export default App;
