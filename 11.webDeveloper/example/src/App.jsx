import "./App.css";

import { Post } from "./components/Post";
import { Users } from "./components/Users";
import { Todos } from "./components/Todos";

function App() {
  return (
    <>
      <Post numPosts={4}></Post>
      <Users numUsers={5}></Users>
      <Todos numTodos={6}></Todos>
    </>
  );
}

export default App;
