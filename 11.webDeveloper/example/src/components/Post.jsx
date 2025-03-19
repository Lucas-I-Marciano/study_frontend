import { useEffect, useState } from "react";
import { listPosts } from "../services/post";
import { NavLink } from "react-router";
import { useCustomSearchParams } from "../hooks/useCustomSearchParams";

export const Post = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const response = async () => {
      const { data } = await listPosts();
      setPosts(data);
    };
    response();
  }, []);

  const { max, offset } = useCustomSearchParams();

  return (
    <div className="post">
      <NavLink to="/posts">
        <h1>Posts:</h1>
      </NavLink>
      {posts.slice(offset, offset + max).map((post) => {
        return <p>{post.title}</p>;
      })}
    </div>
  );
};
