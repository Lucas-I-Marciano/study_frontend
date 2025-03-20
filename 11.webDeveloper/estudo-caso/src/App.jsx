import "./App.css";
import { Navbar } from "./components/Navbar";
import { RouterProvider } from "react-router";
import router from "./routes/router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
