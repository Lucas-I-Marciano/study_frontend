import "./Text.css";

const Text = (props) => {
  const { children, fontSize, as = "p", align } = props;
  const alignProp = align ? `align-${align}` : "";
  const Component = as;
  return (
    <Component className={`font-${fontSize} ${alignProp}`}>
      {children}
    </Component>
  );
};

export default Text;
