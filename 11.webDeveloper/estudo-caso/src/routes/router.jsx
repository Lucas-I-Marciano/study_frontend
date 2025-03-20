import { createBrowserRouter } from "react-router";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { ProtectPage } from "../components/ProtectPage";
import { PublicPage } from "../components/PublicPage";
import { Navbar } from "../components/Navbar";

const returnElementAndNav = (element) => {
  return (
    <>
      <Navbar />
      {element}
    </>
  );
};

const routes = [
  {
    path: "/",
    element: returnElementAndNav(<Home />),
  },
  {
    path: "/login",
    element: returnElementAndNav(<Login />),
  },
  {
    path: "/public",
    element: returnElementAndNav(<PublicPage />),
  },
  {
    path: "/private",
    element: returnElementAndNav(<ProtectPage />),
  },
];

const router = createBrowserRouter(routes);
export default router;
