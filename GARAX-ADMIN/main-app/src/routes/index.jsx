// import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from "react-router-dom";
import { lazy } from "react";
/** Layouts */
import DashboardLayout from "../layouts/dashboard/index.jsx";
import OnlyCanvas from '../layouts/custom/onlyCanvas.jsx'
// ========================================================================================

/** Components */
const ThongKeDuLieu = lazy(() => import('../pages/index.jsx'))
const DanhSachDonHang = lazy(() => import('../pages/DanhSachDonHang.jsx'))
const DanhSachDatLich = lazy(() => import('../pages/DanhSachDatLich.jsx'))
const CaiDatTaiKhoan = lazy(() => import('../pages/CaiDatTaiKhoan.jsx'))
const HoSoNguoiDung = lazy(() => import('../pages/HoSoNguoiDung.jsx'))
// ========================================================================================
import NotFound from './errorNotFound.jsx'
function Router() {
  return useRoutes([
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
        }
      ],
    },
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