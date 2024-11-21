import { useRoutes } from "react-router-dom";

function Routes() {
    // return useRoutes([
    //     {
    //       path: "/",
    //       element: <MainLayout />,
    //       children: [
    //         {
    //           path: "",
    //           element: <Navigate to="/home" replace />,
    //         },
    //         {
    //           path: "home",
    //           element: <DelayedSuspense delay={1000} fallback={<Loader/>}><HomePage /></DelayedSuspense>,
    //         },
    //         {
    //           path: "product",
    //           element: <ProductPage />,
    //         },
    //         {
    //           path: "product/:slug",
    //           element: <DetailProductPage />,
    //         },
    //         {
    //           path: "service",
    //           element: <DelayedSuspense delay={1000} fallback={<Loader/>}><ServicePage /></DelayedSuspense>,
    //         },
    //         // {
    //         //   path: 'success',
    //         //   element: <SuccessPayment />
    //         // },
    //         // {
    //         //   path: 'failed',
    //         //   element: <FailedPayment />
    //         // }
    //       ],
    //     },
    //     {
    //       path: "service",
    //       element: <MainLayout />,
    //       children: [
    //         // {
    //         //   path: "",
    //         //   element: <ServicePage />,
    //         // },
    //         {
    //           path: "cleaning",
    //           element: <DelayedSuspense delay={1000} fallback={<Loader/>}><CleaningPage /></DelayedSuspense>,
    //         },
    //         {
    //           path: "testing",
    //           element: <DelayedSuspense delay={1000} fallback={<Loader/>}><TestingPage /></DelayedSuspense>,
    //         },
    //         {
    //           path: "maintain",
    //           element: <DelayedSuspense delay={1000} fallback={<Loader/>}><MaintainPage /></DelayedSuspense>,
    //         },
    //         {
    //           path: "upgrade",
    //           element: <DelayedSuspense delay={1000} fallback={<Loader/>}><UpgradePage /></DelayedSuspense>,
    //         },
    //         {
    //           path: "support",
    //           element: <DelayedSuspense delay={1000} fallback={<Loader/>}><SupportPage /></DelayedSuspense>,
    //         },
    //       ],
    //     },
    //     {
    //       path: "auth",
    //       element: <OnlyCanvas />,
    //       children: [
    //         {
    //           path: "register",
    //           element: <RegisterPage/>,
    //         },
    //         {
    //           path:"verify",
    //           element: <Verify/>,
    //         },
    //         {
    //           path: "login",
    //           element: <LoginPage />,
    //         },
    //       ],
    //     },
    //     {
    //       path: "user",
    //       element: <MainLayout />,
    //       children: [
    //         {
    //           path: "profile",
    //           /**
    //            * @description protect route
    //            * @example element: { <AuthGuard><ProfileUser /></AuthGuard> }
    //            */
    //           element: <ProfileUser />,
    //           children: [
    //             {
    //               path: '',
    //               element: <ProfileUserUser />
    //             },
    //             {
    //               path: 'payment-infor',
    //               element: <ProfilePaymentInfo />
    //             },
    //             {
    //               path: 'theme',
    //               element: <ProfileTheme />
    //             },
    //             {
    //               path: 'notification',
    //               element: <ProfileNotification />
    //             },
    //             {
    //               path: 'sercurity',
    //               element: <ProfileSercurity />
    //             },
    //             {
    //               path: 'history-access',
    //               element: <ProfileHistoryAccess />
    //             }
    //           ] 
    //         }
    //       ]
    //     },
    //     {
    //       path: "test",
    //       element: <OnlyCanvas />,
    //       children: [
    //         {
    //           path: "loading",
    //           /**
    //            * @description protect route
    //            * @example element: { <AuthGuard><ProfileUser /></AuthGuard> }
    //            */
    //           element: <Loader /> 
    //         },
    //         {
    //           path: "spinner",
    //           /**
    //            * @description protect route
    //            * @example element: { <AuthGuard><ProfileUser /></AuthGuard> }
    //            */
    //           element: <Spinner /> 
    //         },
    //         {
    //           path: "error",
    //           element: <ErrorPage /> 
    //         },
    //         {
    //           path: "error2",
    //           element: <ErrorPage2 /> 
    //         },
    //       ]
    //     }
    //   ]);
}

export default Routes;
