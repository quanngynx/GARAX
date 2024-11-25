import { Navigate, useRoutes } from "react-router-dom";

//Delay
import DelayedSuspense from "../components/delaySuspense/DelayedSuspense";
// layout
import MainLayout from "../layouts/main/index";
import OnlyCanvas from "../layouts/onlyCanvas/index";
// page
import HomePage from "../pages/home/index";
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";
import Verify from "../pages/auth/verified"
// import ProductPage from '../pages/products/index'
// import DetailProductPage from '../pages/detailProduct/index'

//Payment

// page service
// import ServicePage from '../pages/service/index'
// import CleaningPage from '../pages/cleaning/index'
// import TestingPage from '../pages/testing/index'
// import MaintainPage from '../pages/maintain/index'
// import UpgradePage from '../pages/upgrade/index'
// import SupportPage from '../pages/support/index'


// Profile
// import ProfileUser from '../pages/profile/index'
// import ProfileUserUser from '../pages/profile/components/profilePage'
// import ProfilePaymentInfo from '../pages/profile/page/paymentInfor/paymentInfor'
// import ProfileTheme from '../pages/profile/page/theme/theme'
// import ProfileNotification from '../pages/profile/page/notification/notification'
// import ProfileSercurity from '../pages/profile/page/sercurity/sercurity'
// import ProfileHistoryAccess from '../pages/profile/page/historyAccess/historyAccess'

// import ErrorPage from '../pages/error/index'
// import ErrorPage2 from '../pages/error/error2'
// Loading
import Loader from "../components/loading/loading-react";
// import Spinner from "../components/spinner";
// import { patch } from "@mui/material";

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
              element: <DelayedSuspense delay={500} fallback={<Loader/>}><HomePage /></DelayedSuspense>,
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
            // {
            //   path: 'success',
            //   element: <SuccessPayment />
            // },
            // {
            //   path: 'failed',
            //   element: <FailedPayment />
            // }
          ],
        },
        // {
        //   path: "service",
        //   element: <MainLayout />,
        //   children: [
        //     // {
        //     //   path: "",
        //     //   element: <ServicePage />,
        //     // },
        //     {
        //       path: "cleaning",
        //       element: <DelayedSuspense delay={1000} fallback={<Loader/>}><CleaningPage /></DelayedSuspense>,
        //     },
        //     {
        //       path: "testing",
        //       element: <DelayedSuspense delay={1000} fallback={<Loader/>}><TestingPage /></DelayedSuspense>,
        //     },
        //     {
        //       path: "maintain",
        //       element: <DelayedSuspense delay={1000} fallback={<Loader/>}><MaintainPage /></DelayedSuspense>,
        //     },
        //     {
        //       path: "upgrade",
        //       element: <DelayedSuspense delay={1000} fallback={<Loader/>}><UpgradePage /></DelayedSuspense>,
        //     },
        //     {
        //       path: "support",
        //       element: <DelayedSuspense delay={1000} fallback={<Loader/>}><SupportPage /></DelayedSuspense>,
        //     },
        //   ],
        // },
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
        // {
        //   path: "user",
        //   element: <MainLayout />,
        //   children: [
        //     {
        //       path: "profile",
        //       /**
        //        * @description protect route
        //        * @example element: { <AuthGuard><ProfileUser /></AuthGuard> }
        //        */
        //       element: <ProfileUser />,
        //       children: [
        //         {
        //           path: '',
        //           element: <ProfileUserUser />
        //         },
        //         {
        //           path: 'payment-infor',
        //           element: <ProfilePaymentInfo />
        //         },
        //         {
        //           path: 'theme',
        //           element: <ProfileTheme />
        //         },
        //         {
        //           path: 'notification',
        //           element: <ProfileNotification />
        //         },
        //         {
        //           path: 'sercurity',
        //           element: <ProfileSercurity />
        //         },
        //         {
        //           path: 'history-access',
        //           element: <ProfileHistoryAccess />
        //         }
        //       ] 
        //     }
        //   ]
        // },
        // {
        //   path: "test",
        //   element: <OnlyCanvas />,
        //   children: [
        //     {
        //       path: "loading",
        //       /**
        //        * @description protect route
        //        * @example element: { <AuthGuard><ProfileUser /></AuthGuard> }
        //        */
        //       element: <Loader /> 
        //     },
        //     {
        //       path: "spinner",
        //       /**
        //        * @description protect route
        //        * @example element: { <AuthGuard><ProfileUser /></AuthGuard> }
        //        */
        //       element: <Spinner /> 
        //     },
        //     {
        //       path: "error",
        //       element: <ErrorPage /> 
        //     },
        //     {
        //       path: "error2",
        //       element: <ErrorPage2 /> 
        //     },
        //   ]
        // }
      ]);
}

export default Routes;
