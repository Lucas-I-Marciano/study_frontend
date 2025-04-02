import instance from "../providers/client";

export const listTodos = async () => {
  return instance.get("todos");
};
