import "./Header.css";

export const Header = (props) => {
  const { children } = props;
  return <header className="header">{children}</header>;
};
