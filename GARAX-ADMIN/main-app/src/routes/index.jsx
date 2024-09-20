import { Navigate, useRoutes } from "react-router-dom";
import { lazy } from "react";
/** Layouts */
import DashboardLayout from "../layouts/dashboard/index.jsx";
import OnlyCanvas from '../layouts/custom/onlyCanvas.jsx'
import TestLayout from '../layouts/exp/index.jsx'
// ========================================================================================

/** Components */
// const ThongKeDuLieu = lazy(() => import('../pages/index.jsx'))
const DanhSachDonHang = lazy(() => import('../pages/DanhSachDonHang.jsx'))
const DanhSachDatLich = lazy(() => import('../pages/DanhSachDatLich.jsx'))
const CaiDatTaiKhoan = lazy(() => import('../pages/caiDatTaiKhoan.jsx'))
const HoSoNguoiDung = lazy(() => import('../pages/HoSoNguoiDung.jsx'))
import ThongKeDuLieu from '../pages/ThongKeDuLieu/index.jsx'
import TestLoading from '../pages/test/loading.jsx'
import LoginPage from '../pages/auth/login.jsx'
import RegisterPage from '../pages/auth/register.jsx'
// ========================================================================================
import NotFound from './errorNotFound.jsx'
function Router() {
  return useRoutes([
    {
      path: 'auth',
      element: <OnlyCanvas />,
      children: [
        {
          path: 'login',
          element: <LoginPage />
        },
        {
          path: 'register',
          element: <RegisterPage />
        }
      ]
    },
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: '/',
          element: <Navigate to="/statics" replace />
        },
        {
          path: 'statics',
          element: <ThongKeDuLieu />,
        },
        {
          path: 'orders',
          element: <DanhSachDonHang />
        },
        {
          path: "/booking",
          children: [
              {
                  path: '/booking', element: <Navigate to="/booking/list" replace />,
              },
              {
                  path: 'list', element: <DanhSachDatLich />
              },
              // . . .
          ]
        },
        {
          path: 'setting',
          element: <CaiDatTaiKhoan />
        },
        {
          path: 'profile',
          element: <HoSoNguoiDung />
        },
        {
          path: 'dash-v2',
          element: <TestLayout />
        },
        {
          path: 'loading',
          element: <TestLoading />
        }
      ],
    },
    // {
    //   path: 'test',
    //   element: <OnlyCanvas />,
    //   children: [
    //     {
    //       path: 'loading',
    //       element: <TestLoading />
    //     }
    //   ]
    // },
    {
      path: '*',
      element: <OnlyCanvas />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

export default Router;