import "./App.css";
import { ListCards } from "./components/ListCards/ListCards";
function App() {
  return (
    <>
      <header className="header">
        <span className="header-logo">JAXONS</span>
        <div className="header-highlight">
          30% Discount on all products till 31st of december
        </div>
      </header>
      <ListCards></ListCards>
    </>
  );
}

export default App;
