import "./App-query.css";
import { Button } from "./components/Button";

function AppQuery() {
  return (
    <div>
      <div className="button-list">
        <Button endpoint="todos">To do</Button>
        <Button endpoint="users">Users</Button>
        <Button endpoint="posts">Posts</Button>
        <Button endpoint="posasdts">Posts</Button>
      </div>
    </div>
  );
}

export default AppQuery;
