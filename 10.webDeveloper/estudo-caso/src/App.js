import "./App.css";
import { BoxList } from "./components/BoxList";
import { BoxProvider } from "./context/box-context";

function App() {
  return (
    <div>
      <BoxProvider>
        <BoxList></BoxList>
      </BoxProvider>
    </div>
  );
}

export default App;
