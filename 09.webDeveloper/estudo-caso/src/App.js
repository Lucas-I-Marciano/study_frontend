import "./App.css";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";

function App() {
  return (
    <div className="container">
      <div className="container-buttons">
        <Button variant="solid">Solid</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="outline" isLoading>
          Outline
        </Button>
        <Button variant="solid" disabled>
          Solid
        </Button>
        <Button variant="solid" onClick={() => console.log("Click")}>
          Click Solid
        </Button>
      </div>
      <div className="container-text">
        <Text fontSize="sm">Olá</Text>
        <Text fontSize="md">Olá</Text>
        <Text fontSize="lg">Olá</Text>
      </div>
    </div>
  );
}

export default App;
