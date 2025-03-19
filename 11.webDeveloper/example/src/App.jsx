import "./App.css";

import DefaultPath from "./components/DefaultPath";

import { createBrowserRouter, RouterProvider } from "react-router";

let router = createBrowserRouter([
  {
    path: "/",
    Component: () => {
      return (
        <>
          <DefaultPath />
        </>
      );
    },
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
