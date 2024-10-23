import { Navigate, useRoutes } from "react-router-dom";
// layout
import MainLayout from "../layouts/main/index";
import OnlyCanvas from "../layouts/onlyCanvas/index";
// page
import HomePage from "../pages/home/index";
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";
import Verify from "../pages/auth/verified"
import ProductPage from '../pages/products/index'
import DetailProductPage from '../pages/detailProduct/index'

import ProfileUser from '../pages/profile/index'


function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Navigate to="/home" replace />,
        },
        {
          path: "home",
          element: <HomePage />,
        },
        {
          path: "product",
          element: <ProductPage />,
        },
        {
          path: "product/:slug",
          element: <DetailProductPage />,
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
    
    {
      path: "user",
      element: <MainLayout />,
      children: [
        {
          path: "profile",
          /**
           * @description protect route
           * @example element: { <AuthGuard><ProfileUser /></AuthGuard> }
           */
          element: <ProfileUser /> 
        }
      ]
    }
  ]);
}

export default Routes;
