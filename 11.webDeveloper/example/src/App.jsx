import "./App.css";

import routerPath from "./router";

import { createBrowserRouter, RouterProvider } from "react-router";

let router = createBrowserRouter(routerPath);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
