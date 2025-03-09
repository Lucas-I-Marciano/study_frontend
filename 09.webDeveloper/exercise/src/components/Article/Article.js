import "./Article.css";

const Article = (props) => {
  return (
    <div className="article">
      <h2 className="article-title">{props.title}</h2>
      <p className="article-text">{props.description}</p>
    </div>
  );
};

export default Article;
