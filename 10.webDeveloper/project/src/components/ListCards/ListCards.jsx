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

  const [allLikedShoes, setAllLikedShoes] = useState([]);

  useEffect(() => {
    const toQuery = async () => {
      const result = await fetch(`http://localhost:5000/api/liked/`);
      const resultJson = await result.json();
      setAllLikedShoes(resultJson);
    };
    toQuery();
  }, []);

  return (
    <div className="cards">
      {shoes.map((element) => {
        const shoe = allLikedShoes.filter((likedShoe) => {
          return likedShoe["shoe_id"] === element._id;
        });
        let isShoeLiked = false;

        if (shoe.length) {
          isShoeLiked = shoe[0]["is_liked"];
        }

        return (
          <Card
            imageUrl={element.image}
            brand={element.brand}
            currency={element.currency}
            price={element.price}
            name={element.name}
            shoe_id={element._id}
            is_shoe_liked={isShoeLiked}
          ></Card>
        );
      })}
    </div>
  );
};
