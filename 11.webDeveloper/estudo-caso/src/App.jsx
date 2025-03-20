import "./App.css";
import { Navbar } from "./components/Navbar";
import { RouterProvider, Outlet } from "react-router";
import router from "./routes/router";

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <Navbar />
      </RouterProvider>
    </>
  );
}

export default App;
