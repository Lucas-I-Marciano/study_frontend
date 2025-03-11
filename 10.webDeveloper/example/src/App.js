import "./App.css";
import { Button } from "./components/Button/Button";

import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(JSON.stringify({}));

  useEffect(() => {
    const query = async () => {
      try {
        const response = await (
          await fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
        ).json();
        setData(JSON.stringify(response));
      } catch (error) {
        setData(JSON.stringify({ data: "blank" }));
      }
    };
    query();
  }, [count]);
  return (
    <div className="App">
      <p>O Botão foi clicado {count} vezes</p>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Meu botão
      </Button>
      <p>{data}</p>
    </div>
  );
}

export default App;
