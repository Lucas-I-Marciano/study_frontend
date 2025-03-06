import "./Text.css";

const Text = (props) => {
  const { children, fontSize, as = "p" } = props;
  const Component = as;
  return <Component className={`font-${fontSize}`}>{children}</Component>;
};

export default Text;
