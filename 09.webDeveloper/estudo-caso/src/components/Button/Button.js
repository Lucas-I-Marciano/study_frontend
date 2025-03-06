import "./Button.css";

const Button = (props) => {
  const { variant, disabled, isLoading, children, ...rest } = props;
  console.log(rest); // {onClick: ƒ}
  return (
    <button
      className={`button button__${variant}`}
      disabled={disabled || isLoading}
      onClick={rest.functionToConsoleClick}
      {...rest}
    >
      {isLoading ? "Carregando..." : children}
    </button>
  );
};

export default Button;
