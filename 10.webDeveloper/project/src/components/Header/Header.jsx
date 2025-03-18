import "./Header.css";

export const Header = (props) => {
  const { highlight } = props;
  return (
    <>
      <header className="header">
        <span className="header-logo">JAXONS</span>
        <div className="header-highlight">{highlight}</div>
        <span className="header-span">Search results</span>
      </header>
    </>
  );
};
