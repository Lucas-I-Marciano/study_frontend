export const Users = ({ users, numUsers }) => {
  return (
    <div className="users">
      <h1>Users:</h1>
      {users.slice(0, numUsers).map((user) => {
        return <p>{user.name}</p>;
      })}
    </div>
  );
};
