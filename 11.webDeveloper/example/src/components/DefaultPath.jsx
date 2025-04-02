import { Post } from "./Post";
import { Todos } from "./Todos";
import { Users } from "./Users";

const DefaultPath = () => {
  return (
    <>
      <Post numPosts={2} />
      <Users numUsers={3} />
      <Todos numTodos={4} />
    </>
  );
};

export default DefaultPath;
