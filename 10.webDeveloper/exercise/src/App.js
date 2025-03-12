import "./App.css";
import { Button } from "./Button/Button";
import { query } from "./utils/query";

function App() {
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
          console.log(JSON.stringify(await query(toQuery[randomNumber])));
        }}
      >
        Click
      </Button>
    </div>
  );
}

export default App;
