import "./App.css";
import { Header } from "./components/Header/Header";
import { KanbanTable } from "./components/KanbanTable/KanbanTable";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header>Kanban</Header>
        <KanbanTable />
      </div>
    </div>
  );
}

export default App;
