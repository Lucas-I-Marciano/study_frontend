import { useEffect, useState } from "react";
import { listPosts } from "../services/post";
import { NavLink, useLocation } from "react-router";

export const Post = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const response = async () => {
      const { data } = await listPosts();
      setPosts(data);
    };
    response();
  }, []);

  const { search } = useLocation();
  const urlSearchParam = new URLSearchParams(search);
  const max = parseInt(urlSearchParam.get("max"));
  const offset = parseInt(urlSearchParam.get("offset"));

  const maxElement = max ? max : 10;
  const offsetElement = offset ? offset : 0;

  return (
    <div className="post">
      <NavLink to="/posts">
        <h1>Posts:</h1>
      </NavLink>
      {posts.slice(offsetElement, offsetElement + maxElement).map((post) => {
        return <p>{post.title}</p>;
      })}
    </div>
  );
};
