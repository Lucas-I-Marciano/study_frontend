import "./App.css";

import { Post } from "./components/Post";
import { Users } from "./components/Users";
import { Todos } from "./components/Todos";

import { createBrowserRouter, RouterProvider } from "react-router";

let router = createBrowserRouter([
  {
    path: "/",
    Component: () => {
      return (
        <>
          <Post numPosts={3} />
          <Users numUsers={3} />
          <Todos numTodos={3} />
        </>
      );
    },
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
