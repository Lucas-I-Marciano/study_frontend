import "./App.css";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
// import { Task } from "./components/Task/Task";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header>Kanban</Header>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
