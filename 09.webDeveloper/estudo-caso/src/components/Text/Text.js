import "./Text.css";

const Text = (props) => {
  const { children, fontSize } = props;
  return <p className={`font-${fontSize}`}>{children}</p>;
};

export default Text;
