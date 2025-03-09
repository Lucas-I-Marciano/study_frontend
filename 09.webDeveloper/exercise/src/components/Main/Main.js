import Article from "../Article/Article";
import "./Main.css";

const createArticle = (title, begginingDescription = "") => {
  return {
    title,
    description: `${begginingDescription}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit leo, scelerisque non ornare tristique, euismod ac ante. Duis in iaculis felis, ac volutpat erat. Donec dignissim lectus vitae risus efficitur, ac ultricies dolor tempor. Etiam vitae risus ligula. Duis fringilla consectetur ligula sit amet malesuada. Mauris rutrum tempor pharetra. Curabitur ut lorem ipsum.`,
  };
};

const articles = [
  createArticle("Article 1", "1 - "),
  createArticle("Article 2", "2 - "),
  createArticle("Article 3", "3 - "),
  createArticle("Article 4", "4 - "),
  createArticle("Article 5", "Estudo sobre TCC como fazer amigos - "),
];

const Main = () => {
  return (
    <main className="main">
      {articles.map((object) => {
        return (
          <Article title={object.title} description={object.description} />
        );
      })}
    </main>
  );
};

export default Main;
