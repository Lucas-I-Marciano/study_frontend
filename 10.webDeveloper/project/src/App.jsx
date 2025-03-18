import "./App.css";
import { Header } from "./components/Header/Header";
import { ListCards } from "./components/ListCards/ListCards";

function App() {
  return (
    <>
      <Header highlight="30% Discount on all products till 31st of december"></Header>
      <ListCards></ListCards>
    </>
  );
}

export default App;
