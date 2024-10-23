import { Navigate, useRoutes } from "react-router-dom";

/** Layouts */
import DashboardLayout from "../layouts/dashboard/index.jsx";
import OnlyCanvas from '../layouts/custom/onlyCanvas.jsx'
import TestLayout from '../layouts/exp/index.jsx'
// ========================================================================================

/** Components */
// const ThongKeDuLieu = lazy(() => import('../pages/index.jsx'))
import DanhSachDonHang from '../pages/danhSachDonHang.jsx' 
import DanhSachDatLich from '../pages/danhSachDatLich.jsx'
import CaiDatTaiKhoan from '../pages/caiDatTaiKhoan.jsx'
import HoSoNguoiDung from '../pages/hoSoNguoiDung.jsx'
import ThongKeDuLieu from '../pages/ThongKeDuLieu/index.jsx'
import TestLoading from '../pages/test/loading.jsx'

import TongQuanCaiDat from '../pages/CaiDat/tongQuanCaiDat.jsx'
// import LoginPage from '../pages/auth/login.jsx'
// import RegisterPage from '../pages/auth/register.jsx'
// ========================================================================================
import NotFound from './errorNotFound.jsx'

function Router() {
  return useRoutes([
    {
      path: 'test',
      element: <OnlyCanvas />,
      children: [
        {
          path: 'loading',
          element: <TestLoading />
        }
      ]
    },
   
    {
      path: '/',
      element: <DashboardLayout/>,
      children: [
        {
          path: '/',
          element: <Navigate to="/statics" replace />
        },
        {
          path: 'statics',
          element: <ThongKeDuLieu />,
        },
        // {
        //   path: '/',
        //   element: <Navigate to="/orders" replace />
        // },
        {
          path: 'orders',
          element: <DanhSachDonHang />
        },
        {
          path: "booking",
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
        // {
        //   path: '/',
        //   element: <Navigate to="/setting" replace />
        // },
        {
          path: 'account',
          element: <CaiDatTaiKhoan/>
          
        },
        {
          path: 'profile',
          element: <HoSoNguoiDung/>
        },
        {
          path: 'dash-v2',
          element: <TestLayout />
        },
        {
          path: 'setting',
          children: [
            {
              path: '/setting', element: <Navigate to="/setting/general-setting" replace />,
            },
            {
              path: 'general-setting', element: <TongQuanCaiDat/>
            }
          ]
        },
        // {
        //   path: 'loading',
        //   element: <TestLoading />
        // }
      ],
    },
    {
      path: '*',
      element: <OnlyCanvas/>,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

export default Router;