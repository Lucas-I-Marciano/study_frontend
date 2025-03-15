import "./App.css";
import { useEffect, useState } from "react";

function App() {
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
    <div>
      <p>{JSON.stringify(shoes)}</p>
    </div>
  );
}

export default App;
