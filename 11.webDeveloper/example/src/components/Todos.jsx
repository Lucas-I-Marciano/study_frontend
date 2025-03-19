export const Todos = ({ todos, numTodos }) => {
  return (
    <div className="todos">
      <h1>To do:</h1>
      {todos.slice(0, numTodos).map((user) => {
        return <p>{user.title}</p>;
      })}
    </div>
  );
};
