import "./App.css";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { ProtectPage } from "./components/ProtectPage";
import { PublicPage } from "./components/PublicPage";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ProtectPage />
      <PublicPage />
      <Login />
    </>
  );
}

export default App;
