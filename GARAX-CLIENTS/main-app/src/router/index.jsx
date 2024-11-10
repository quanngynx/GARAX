import { Navigate, useRoutes } from "react-router-dom";

//Delay
import DelayedSuspense from "../components/DelayedSuspense";
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

// page service
import ServicePage from '../pages/service/index'
import CleaningPage from '../pages/cleaning/index'
import TestingPage from '../pages/testing/index'
import MaintainPage from '../pages/maintain/index'
import UpgradePage from '../pages/upgrade/index'
import SupportPage from '../pages/support/index'

import ProfileUser from '../pages/profile/index'

import ErrorPage from '../pages/error/index'
import ErrorPage2 from '../pages/error/error2'
// Loading
import Loader from "../components/loading-react";
import Spinner from "../components/spinner";


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
          element: <DelayedSuspense delay={1000} fallback={<Loader/>}><HomePage /></DelayedSuspense>,
        },
        {
          path: "product",
          element: <ProductPage />,
        },
        {
          path: "product/:slug",
          element: <DetailProductPage />,
        },
        {
          path: "service",
          element: <DelayedSuspense delay={1000} fallback={<Loader/>}><ServicePage /></DelayedSuspense>,
        },
      ],
    },
    {
      path: "service",
      element: <MainLayout />,
      children: [
        // {
        //   path: "",
        //   element: <ServicePage />,
        // },
        {
          path: "cleaning",
          element: <DelayedSuspense delay={1000} fallback={<Loader/>}><CleaningPage /></DelayedSuspense>,
        },
        {
          path: "testing",
          element: <DelayedSuspense delay={1000} fallback={<Loader/>}><TestingPage /></DelayedSuspense>,
        },
        {
          path: "maintain",
          element: <DelayedSuspense delay={1000} fallback={<Loader/>}><MaintainPage /></DelayedSuspense>,
        },
        {
          path: "upgrade",
          element: <DelayedSuspense delay={1000} fallback={<Loader/>}><UpgradePage /></DelayedSuspense>,
        },
        {
          path: "support",
          element: <DelayedSuspense delay={1000} fallback={<Loader/>}><SupportPage /></DelayedSuspense>,
        },
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
    },
    {
      path: "test",
      element: <OnlyCanvas />,
      children: [
        {
          path: "loading",
          /**
           * @description protect route
           * @example element: { <AuthGuard><ProfileUser /></AuthGuard> }
           */
          element: <Loader /> 
        },
        {
          path: "spinner",
          /**
           * @description protect route
           * @example element: { <AuthGuard><ProfileUser /></AuthGuard> }
           */
          element: <Spinner /> 
        },
        {
          path: "error",
          element: <ErrorPage /> 
        },
        {
          path: "error2",
          element: <ErrorPage2 /> 
        },
      ]
    }
  ]);
}

export default Routes;
