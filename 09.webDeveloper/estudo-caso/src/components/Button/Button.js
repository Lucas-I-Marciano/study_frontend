import "./Button.css";

const Button = (props) => {
  return (
    <button className={`button button__${props.variant}`}>
      {props.isLoading ? "Carregando..." : props.children}
    </button>
  );
};

export default Button;
