export const User = ({ posts }) => {
  return (
    <div className="post">
      <h1>Posts:</h1>
      {posts.slice(0, 10).map((post) => {
        return <p>{post.title}</p>;
      })}
    </div>
  );
};
