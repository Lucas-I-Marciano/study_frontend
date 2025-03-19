export const Post = ({ posts, numPosts }) => {
  return (
    <div className="post">
      <h1>Posts:</h1>
      {posts.slice(0, numPosts).map((post) => {
        return <p>{post.title}</p>;
      })}
    </div>
  );
};
