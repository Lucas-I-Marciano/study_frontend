import { useEffect, useState } from "react";
import "./App.css";
import { listPosts } from "./services/post";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const response = async () => {
      const { data } = await listPosts();
      console.log(data);
      setPosts(data);
    };
    response();
  }, []);
  return (
    <>
      {posts.map((post) => {
        return <p>{post.title}</p>;
      })}
    </>
  );
}

export default App;
