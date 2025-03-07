import "./App.css";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { Task } from "./components/Task/Task";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header>Kanban</Header>
        <Card titleColor="black" colorScheme="blue" icon="✔️">
          <Task
            title="Redo Portfolio"
            label="label"
            colorScheme="todo"
            avatarUrl="male"
          ></Task>
          <Task
            title="Task 1"
            label="label"
            colorScheme="todo"
            avatarUrl="male"
          ></Task>
        </Card>
      </div>
    </div>
  );
}

export default App;
