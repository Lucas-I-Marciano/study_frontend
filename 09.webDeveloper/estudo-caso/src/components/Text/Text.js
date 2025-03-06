import "./Text.css";

const Text = (props) => {
  const { children } = props;
  return <p>{children}</p>;
};

export default Text;
