import { useEffect, useState } from "react";
import { listTodos } from "../services/todo";
import { NavLink } from "react-router";
import { useCustomSearchParams } from "../hooks/useCustomSearchParams";

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const response = async () => {
      const { data } = await listTodos();
      setTodos(data);
    };
    response();
  }, []);

  const { max, offset } = useCustomSearchParams();

  return (
    <div className="todos">
      <NavLink to="/todos">
        <h1>To do:</h1>
      </NavLink>
      {todos.slice(offset, offset + max).map((user) => {
        return <p>{user.title}</p>;
      })}
    </div>
  );
};
