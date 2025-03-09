import "./Button.css";

const Button = (props) => {
  console.log(props);
  return (
    <button className={`button button__${props.variant}`}>Meu botão</button>
  );
};

export default Button;
