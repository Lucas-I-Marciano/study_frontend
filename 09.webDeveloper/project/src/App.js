import "./App.css";
import { Header } from "./components/Header/Header";
import { Task } from "./components/Task/Task";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header>Kanban</Header>
        <Task
          title="Christmas Banners"
          label="label"
          colorScheme="todo"
          avatarUrl="male"
        ></Task>
      </div>
    </div>
  );
}

export default App;
