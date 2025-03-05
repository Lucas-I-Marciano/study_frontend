import Article from "../Article/Article";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <Article
        title="Article 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit leo, scelerisque non ornare tristique, euismod ac ante. Duis in iaculis felis, ac volutpat erat. Donec dignissim lectus vitae risus efficitur, ac ultricies dolor tempor. Etiam vitae risus ligula. Duis fringilla consectetur ligula sit amet malesuada. Mauris rutrum tempor pharetra. Curabitur ut lorem ipsum."
      />{" "}
      <Article
        title="Article 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit leo, scelerisque non ornare tristique, euismod ac ante. Duis in iaculis felis, ac volutpat erat. Donec dignissim lectus vitae risus efficitur, ac ultricies dolor tempor. Etiam vitae risus ligula. Duis fringilla consectetur ligula sit amet malesuada. Mauris rutrum tempor pharetra. Curabitur ut lorem ipsum."
      />{" "}
    </main>
  );
};

export default Main;
