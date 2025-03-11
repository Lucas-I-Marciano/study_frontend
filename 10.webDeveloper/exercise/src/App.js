import "./App.css";
import { Button } from "./Button/Button";
import { query } from "./utils/query";

function App() {
  return (
    <div className="App">
      <Button
        onClick={() => {
          query("users");
        }}
      >
        Click
      </Button>
    </div>
  );
}

export default App;
