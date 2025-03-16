import "./ListCards.css";

import { useEffect, useState } from "react";
import { Card } from "../Card/Card";

export const ListCards = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/shoes");
        const data = await response.json();
        setShoes(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="cards">
      {shoes.map((element) => {
        return (
          <Card
            imageUrl={element.image}
            brand={element.brand}
            currency={element.currency}
            price={element.price}
            name={element.name}
          ></Card>
        );
      })}
    </div>
  );
};
