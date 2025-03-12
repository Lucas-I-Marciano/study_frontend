import { useState } from "react";
import "./App.css";
import { Button } from "./Button/Button";
import { Card } from "./Card/Card";
import { query } from "./utils/query";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <Button
        onClick={async () => {
          const toQuery = {
            0: "users",
            1: "todos",
            2: "posts",
          };
          const randomNumber = Math.round(Math.random() * 2);
          console.log("endpoint: ", toQuery[randomNumber]);
          setText(JSON.stringify(await query(toQuery[randomNumber])));
        }}
      >
        Click
      </Button>
      <Card>{text}</Card>
    </div>
  );
}

export default App;
