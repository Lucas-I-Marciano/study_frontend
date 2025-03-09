import "./Button.css";

const Button = (props) => {
  const {
    variant = "solid",
    disabled,
    isLoading,
    children,
    colorScheme = "teal",
    ...rest
  } = props;
  console.log(rest); // {onClick: ƒ}
  return (
    <button
      className={`button button__${variant} color-scheme__${colorScheme}`}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? "Carregando..." : children}
    </button>
  );
};

export default Button;
