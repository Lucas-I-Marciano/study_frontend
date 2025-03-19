import { useEffect, useState } from "react";
import { listTodos } from "../services/todo";
import { NavLink, useLocation } from "react-router";

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const response = async () => {
      const { data } = await listTodos();
      setTodos(data);
    };
    response();
  }, []);

  const { search } = useLocation();
  const urlSearchParam = new URLSearchParams(search);
  const max = parseInt(urlSearchParam.get("max"));
  const offset = parseInt(urlSearchParam.get("offset"));

  const maxElement = max ? max : 10;
  const offsetElement = offset ? offset : 0;

  return (
    <div className="todos">
      <NavLink to="/todos">
        <h1>To do:</h1>
      </NavLink>
      {todos.slice(offsetElement, offsetElement + maxElement).map((user) => {
        return <p>{user.title}</p>;
      })}
    </div>
  );
};
