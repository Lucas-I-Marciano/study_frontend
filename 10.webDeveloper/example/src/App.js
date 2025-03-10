import "./App.css";
import { Button } from "./components/Button/Button";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <p>O Botão foi clicado {count} vezes</p>
      <Button>Meu botão</Button>
    </div>
  );
}

export default App;
