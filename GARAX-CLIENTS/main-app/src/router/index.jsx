import { Navigate, useRoutes } from "react-router-dom";
// layout
import MainLayout from "../layouts/main/index";
// page
import HomePage from "../pages/home/index";
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";
import Verify from "../pages/auth/verified"
import OnlyCanvas from "../layouts/onlyCanvas/index";


function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Navigate to="/home" replace />,
        },
        {
          path: "home",
          element: <HomePage />,
        }
      ],
    },

    {
      path: "auth",
      element: <OnlyCanvas />,
      children: [
        {
          path: "register",
          element: <RegisterPage/>,
        },
        {
          path:"verify",
          element: <Verify/>,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
      ],
    },
  ]);
}

export default Routes;
