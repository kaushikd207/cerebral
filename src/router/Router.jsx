import App from "../App";
import LoginPage from "@/pages/LoginPage";
import Team from "@/pages/Team";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <>Not FOund</>,
    loader: rootLoader,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/team",
        element: <Team />,
      },
    ],
  },
]);
