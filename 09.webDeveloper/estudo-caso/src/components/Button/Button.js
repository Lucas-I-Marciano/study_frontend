import "./Button.css";

const Button = (props) => {
  return (
    <button
      className={`button button__${props.variant}`}
      disabled={props.disabled || props.isLoading}
    >
      {props.isLoading ? "Carregando..." : props.children}
    </button>
  );
};

export default Button;
