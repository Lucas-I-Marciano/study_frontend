import "./App-query.css";
import { Button } from "./components/Button";

function AppQuery() {
  return (
    <div>
      <Button endpoint="todo">To do</Button>
      <Button endpoint="users">Users</Button>
      <Button endpoint="posts">Posts</Button>
    </div>
  );
}

export default AppQuery;
