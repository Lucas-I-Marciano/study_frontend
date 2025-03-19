import { useEffect, useState } from "react";
import { listPosts } from "../services/post";
import { NavLink } from "react-router";

export const Post = ({ numPosts }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const response = async () => {
      const { data } = await listPosts();
      setPosts(data);
    };
    response();
  }, []);

  return (
    <div className="post">
      <NavLink to="/posts">
        <h1>Posts:</h1>
      </NavLink>
      {posts.slice(0, numPosts).map((post) => {
        return <p>{post.title}</p>;
      })}
    </div>
  );
};
