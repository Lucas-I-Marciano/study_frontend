import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <h1>Meu nome é Lucas</h1>
      <p>Estou estudando react</p>
      <Button variant="solid" />
      <Button variant="outlined" />
    </div>
  );
}

export default App;
