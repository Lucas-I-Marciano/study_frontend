import "./App.css";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { dbTask } from "./components/Task/dbTask";
import { Task } from "./components/Task/Task";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header>Kanban</Header>
        <Card titleText="To do" titleColor="black" colorScheme="blue" icon="✔️">
          {dbTask.map((element) => {
            return (
              <Task
                title={element.title}
                label={element.label}
                colorScheme={element.colorScheme}
                avatarUrl={element.avatarUrl}
              ></Task>
            );
          })}
        </Card>
      </div>
    </div>
  );
}

export default App;
