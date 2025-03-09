import "./App.css";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";

function App() {
  return (
    <div className="container">
      <div className="container-buttons">
        <Button variant="solid" colorScheme="teal">
          Solid teal
        </Button>
        <Button variant="outline" colorScheme="teal">
          Outline teal
        </Button>
        <br></br>
        <br></br>
        <Button variant="solid" colorScheme="blue">
          Solid blue
        </Button>
        <Button variant="outline" colorScheme="blue">
          Outline blue
        </Button>
        <br></br>
        <br></br>
        <Button variant="solid" colorScheme="pink">
          Solid pink
        </Button>
        <Button variant="outline" colorScheme="pink">
          Outline pink
        </Button>
        <br></br>
        <br></br>
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
        <Text fontSize="sm" align="center">
          Olá
        </Text>
        <Text fontSize="md" align="end">
          Olá
        </Text>
        <Text fontSize="lg" align="start">
          Olá
        </Text>
        <Text as="h1" fontSize="lg">
          H1
        </Text>
      </div>
    </div>
  );
}

export default App;
