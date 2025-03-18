import "./App-query.css";
import { Button } from "./components/Button";
import { Span } from "./components/Span";
import { QueryProvider } from "./context/query-context";

function AppQuery() {
  return (
    <div>
      <QueryProvider>
        <div className="button-list">
          <Button endpoint="todos">To do</Button>
          <Button endpoint="users">Users</Button>
          <Button endpoint="posts">Posts</Button>
          <Button endpoint="posasdts">Posts</Button>
        </div>
        <Span>Resultado</Span>
      </QueryProvider>
    </div>
  );
}

export default AppQuery;
