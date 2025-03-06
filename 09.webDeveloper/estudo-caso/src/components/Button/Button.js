import "./Button.css";

const Button = (props) => {
  return (
    <button className={`button button__${props.variant}`}>
      {props.children}
    </button>
  );
};

export default Button;
