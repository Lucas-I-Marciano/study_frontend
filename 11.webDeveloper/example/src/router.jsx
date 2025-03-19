import DefaultPath from "./components/DefaultPath";
import { Post } from "./components/Post";
import { Todos } from "./components/Todos";
import { Users, User } from "./components/Users";
import { createBrowserRouter, useParams } from "react-router";

const routes = [
  {
    path: "/",
    element: <DefaultPath />,
  },
  {
    path: "/users",
    element: <Users numUsers={5} />,
  },
  {
    path: "/posts",
    element: <Post numPosts={5} />,
  },
  {
    path: "/todos",
    element: <Todos numTodos={5} />,
  },
  {
    path: "users/:id",
    Component: () => {
      const { id } = useParams();
      return <User userId={id} />;
    },
  },
];

const router = createBrowserRouter(routes);

export default router;
