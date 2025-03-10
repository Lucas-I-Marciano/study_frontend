import "./App.css";
import { Button } from "./components/Button/Button";

import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count;
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
    </div>
  );
}

export default App;
