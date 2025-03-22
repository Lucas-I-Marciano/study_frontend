import { createBrowserRouter } from "react-router";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { ProtectPage } from "../components/ProtectPage";
import { PublicPage } from "../components/PublicPage";
import { Layout } from "../components/Layout";
import { NeedAuth } from "../components/NeedAuth";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/private",
        element: (
          <NeedAuth>
            <ProtectPage />
          </NeedAuth>
        ),
      },
      {
        path: "/public",
        element: <PublicPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
