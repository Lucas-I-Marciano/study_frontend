import "./App.css";
import { Navbar } from "./components/Navbar";
import { RouterProvider, Outlet } from "react-router";
import router from "./routes/router";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router}>
          <Navbar />
        </RouterProvider>
      </AuthProvider>
    </>
  );
}

export default App;
