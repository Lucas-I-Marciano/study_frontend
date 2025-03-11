import "./App.css";
import { Button } from "./Button/Button";

const query = async (endpoint) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/${endpoint}`
  );
  const responseJson = await response.json();
  console.log(responseJson);
  return responseJson;
};

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
