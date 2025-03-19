import { useEffect, useState } from "react";
import { listTodos } from "../services/todo";
import { NavLink } from "react-router";

export const Todos = ({ numTodos }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const response = async () => {
      const { data } = await listTodos();
      setTodos(data);
    };
    response();
  }, []);
  return (
    <div className="todos">
      <NavLink to="/todos">
        <h1>To do:</h1>
      </NavLink>
      {todos.slice(0, numTodos).map((user) => {
        return <p>{user.title}</p>;
      })}
    </div>
  );
};
