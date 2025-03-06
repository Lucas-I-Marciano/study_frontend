import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="container">
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="outline" isLoading>
        Outline
      </Button>
      <Button variant="solid" disabled>
        Solid
      </Button>
      <Button
        variant="solid"
        functionToConsoleClick={() => console.log("Click")}
      >
        Click Solid
      </Button>
    </div>
  );
}

export default App;
