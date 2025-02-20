import { lazy, LazyExoticComponent } from "react";
import { Navigate, useRoutes } from "react-router-dom";

//Delay
import DelayedSuspense from "@/components/delaySuspense/DelayedSuspense";
// layout
import MainLayout from "@/components/layouts/main";
import OnlyCanvas from "@/components/layouts/onlyCanvas";

// page
import { HomePage } from "@/pages/home";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import Verify from "@/pages/auth/verified"

const ProductPage: LazyExoticComponent<() => JSX.Element> = lazy(
  async() => {
    const module: typeof import('@/pages/products') = await import('@/pages/products')
    return { default: module.ProductPage };
  }
)

// const DetailProductPage: LazyExoticComponent<() => JSX.Element> = lazy(
//   async() => {
//     const module: typeof import('@/pages/detailProduct') = await import('@/pages/detailProduct')
//     return { default: module.detailProduct };
//   }
// )
import { DetailProductPage } from "@/pages/detailProduct";

//Payment

// page service
import ServicePage from '@/pages/service'
import CleaningPage from '@/pages/cleaning'
import TestingPage from '@/pages/testing'
import MaintainPage from '@/pages/maintain'
import UpgradePage from '@/pages/upgrade'
import SupportPage from '@/pages/support'


// Profile
const ProfileUser: LazyExoticComponent<() => JSX.Element> = lazy(
  async() => {
    const module: typeof import('@/pages/profile') = await import('@/pages/profile')
    return { default: module.profileUser };
  }
)

const ProfileUserUser: LazyExoticComponent<() => JSX.Element> = lazy(
  async() => {
    const module: typeof import('@/pages/profile/components/profilePage') = await import('@/pages/profile/components/profilePage')
    return { default: module.rightContent };
  }
)

const ProfilePaymentInfo: LazyExoticComponent<() => JSX.Element> = lazy(
  async() => {
    const module: typeof import('@/pages/profile/page/paymentInfor/paymentInfor') = await import('@/pages/profile/page/paymentInfor/paymentInfor')
    return { default: module.paymentInfor };
  }
)

import ProfileTheme from '@/pages/profile/page/theme/theme'
import ProfileNotification from '@/pages/profile/page/notification/notification'
import ProfileSercurity from '@/pages/profile/page/sercurity/sercurity'
import ProfileHistoryAccess from '@/pages/profile/page/historyAccess/historyAccess'

import ErrorPage from '@/pages/error'
import ErrorPage2 from '@/pages/error/error2'
// Loading
import Loader from "@/components/loading/loading-react";
// import Spinner from "@/components/spinner";
// import { patch } from "@mui/material";

function Routes() {
    return useRoutes([
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Navigate to="/home" replace />,
            },
            {
              path: "home",
              element: (
                <DelayedSuspense delay={250} fallback={<Loader/>}>
                  <HomePage />
                </DelayedSuspense>
              ),
            },
            {
              path: "product",
              element: (
                <DelayedSuspense delay={250} fallback={<Loader/>}>
              <ProductPage />
              </DelayedSuspense>
              ),
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
              element: <ProfileUser />,
              children: [
                {
                  path: '',
                  element: <ProfileUserUser />
                },
                {
                  path: 'payment-infor',
                  element: <ProfilePaymentInfo />
                },
                {
                  path: 'theme',
                  element: <ProfileTheme />
                },
                {
                  path: 'notification',
                  element: <ProfileNotification />
                },
                {
                  path: 'sercurity',
                  element: <ProfileSercurity />
                },
                {
                  path: 'history-access',
                  element: <ProfileHistoryAccess />
                }
              ] 
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
            // {
            //   path: "spinner",
            //   /**
            //    * @description protect route
            //    * @example element: { <AuthGuard><ProfileUser /></AuthGuard> }
            //    */
            //   element: <Spinner /> 
            // },
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
