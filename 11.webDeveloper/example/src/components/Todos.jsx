import { useEffect, useState } from "react";
import { listTodos } from "../services/todo";

export const Todos = ({ numTodos }) => {
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
    <div className="todos">
      <h1>To do:</h1>
      {todos.slice(0, numTodos).map((user) => {
        return <p>{user.title}</p>;
      })}
    </div>
  );
};
