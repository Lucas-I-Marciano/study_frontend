import { converCurrencySymbol } from "../utils/converCurrencySymbol";
import "./Card.css";

export const Card = (props) => {
  const { imageUrl, brand, currency, price, name } = props;
  return (
    <div className="card">
      <img className="card-image" src={`/src/assets/images/${imageUrl}`}></img>
      <p className="card-brand">{brand}</p>
      <p className="card-name">{name}</p>
      <p className="card-price">
        {converCurrencySymbol(currency)} {price}
      </p>
    </div>
  );
};
