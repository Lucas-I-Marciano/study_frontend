import DefaultPath from "./components/DefaultPath";
import { Post } from "./components/Post";
import { Todos } from "./components/Todos";
import { Users, User } from "./components/Users";
import { useParams } from "react-router";

export default [
  {
    path: "/",
    Component: () => {
      return (
        <>
          <DefaultPath />
        </>
      );
    },
  },
  {
    path: "/users",
    Component: () => {
      return <Users numUsers={5} />;
    },
  },
  {
    path: "/posts",
    Component: () => {
      return <Post numPosts={5} />;
    },
  },
  {
    path: "/todos",
    Component: () => {
      return <Todos numTodos={5} />;
    },
  },
  {
    path: "users/:id",
    Component: () => {
      const { id } = useParams();
      return <User userId={id} />;
    },
  },
];
