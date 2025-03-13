import "./App.css";
import { Box } from "./components/Box";

const initialState = {
  firstBox: [
    {
      id: 0,
      name: "button 0",
    },
    {
      id: 1,
      name: "button 1",
    },
    {
      id: 2,
      name: "button 2",
    },
  ],
  secondBox: [
    {
      id: 3,
      name: "button 3",
    },
    {
      id: 4,
      name: "button 4",
    },
    {
      id: 5,
      name: "button 5",
    },
  ],
};

function App() {
  return (
    <div className="container">
      <Box items={initialState["firstBox"]}></Box>
      <Box items={initialState["secondBox"]}></Box>
    </div>
  );
}

export default App;
