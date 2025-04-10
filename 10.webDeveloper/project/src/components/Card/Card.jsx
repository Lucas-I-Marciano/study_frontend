import { useEffect, useState } from "react";
import { converCurrencySymbol } from "../../utils/converCurrencySymbol";
import "./Card.css";

export const Card = (props) => {
  const { imageUrl, brand, currency, price, name, shoe_id, is_shoe_liked } =
    props;

  const returnStar = (isLiked, shoe_id) => {
    if (isLiked) {
      return (
        <button
          onClick={async () => {
            setIsShoeLiked(!isShoeLiked);
            await fetch(`http://localhost:5000/api/liked/${shoe_id}`, {
              method: "PATCH",
            });
          }}
          className="button-star"
        >
          <svg
            width="29"
            height="25"
            viewBox="0 0 29 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.67 0.869652L9.20538 7.3337L1.45378 8.37361C0.0636934 8.55913 -0.493403 10.1361 0.514676 11.0393L6.12278 16.068L4.79636 23.1716C4.5576 24.4556 6.02728 25.4174 7.2582 24.8169L14.1927 21.4628L21.1272 24.8169C22.3582 25.4125 23.8278 24.4556 23.5891 23.1716L22.2627 16.068L27.8708 11.0393C28.8788 10.1361 28.3217 8.55913 26.9317 8.37361L19.1801 7.3337L15.7155 0.869652C15.0947 -0.282549 13.2961 -0.297196 12.67 0.869652Z"
              fill="black"
            />
          </svg>
        </button>
      );
    }
    return (
      <button
        onClick={async () => {
          setIsShoeLiked(!isShoeLiked);
          await fetch(`http://localhost:5000/api/liked/${shoe_id}`, {
            method: "PATCH",
          });
        }}
        className="button-star"
      >
        <svg
          width="29"
          height="25"
          viewBox="0 0 29 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.67 0.869652L9.20538 7.3337L1.45378 8.37361C0.0636933 8.55913 -0.493403 10.1361 0.514676 11.0393L6.12278 16.068L4.79636 23.1716C4.5576 24.4556 6.02728 25.4174 7.2582 24.8169L14.1927 21.4628L21.1272 24.8169C22.3582 25.4125 23.8278 24.4556 23.5891 23.1716L22.2627 16.068L27.8708 11.0393C28.8788 10.1361 28.3217 8.55913 26.9317 8.37361L19.1801 7.3337L15.7155 0.869652C15.0947 -0.282549 13.2961 -0.297196 12.67 0.869652Z"
            fill="black"
            fill-opacity="0.15"
          />
        </svg>
      </button>
    );
  };

  const [isShoeLiked, setIsShoeLiked] = useState(is_shoe_liked);

  useEffect(() => {
    const toQuery = async () => {
      const result = await fetch(`http://localhost:5000/api/liked/${shoe_id}`);
      const resultJson = await result.json();
      const isLikedVariable = resultJson["is_liked"];
      if (isLikedVariable) {
        setIsShoeLiked(isLikedVariable);
      }
    };
    toQuery();
  }, []);

  return (
    <div className="card">
      <div className="card-star">{returnStar(isShoeLiked, shoe_id)}</div>
      <img className="card-image" src={`/src/assets/images/${imageUrl}`}></img>
      <p className="card-brand">{brand}</p>
      <p className="card-name">{name}</p>
      <p className="card-price">
        {converCurrencySymbol(currency)} {price}
      </p>
    </div>
  );
};
