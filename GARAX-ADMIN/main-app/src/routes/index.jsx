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
import DanhSachTaiKhoan from '../pages/caiDatTaiKhoan.jsx'
import DanhSachTaiKhoanNhanVien from '../pages/DSTaiKhoanNV/index.jsx'
import DanhSachTaiKhoanKhachHang from '../pages/DSTaiKhoanKH/index.jsx'
import DanhSachSanPham from '../pages/danhSachSanPham.jsx'
import HoSoNguoiDung from '../pages/hoSoNguoiDung.jsx'
import ThongKeDuLieu from '../pages/ThongKeDuLieu/index.jsx'
import TestLoading from '../pages/test/loading.jsx'
import Thongtinchitietsanpham from "../pages/Thongtinchitietsanpham.jsx";

// auth
import LoginPage from '../pages/auth/login.jsx'
import RegisterPage from '../pages/auth/register.jsx'

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
      path: 'auth',
      element: <OnlyCanvas />,
      children: [
        {
          path: 'login',
          element: <LoginPage />,
        },
        {
          path: 'register',
          element: <RegisterPage />,
        },
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
        {
          path: 'detail',
          element:<Thongtinchitietsanpham/>
        },
        {
          path: 'products',
          children: [
            {
              path: '/products', element: <Navigate to="/products/list" replace />,
            },
            {
              path: 'list', element: <DanhSachSanPham />
            },
            // {
            //   path: 'details',
            //   element: <Thongtinchitietsanpham/>
            // }
          ]
        },
        
        // {
        //   path: '/',
        //   element: <Navigate to="/setting" replace />
        // },
        
        {
          path: 'account',
          element: <DanhSachTaiKhoan/>
        },
        {
          path: 'account/staff',
          element: <DanhSachTaiKhoanNhanVien/>
        },
        {
          path: 'account/customer',
          element: <DanhSachTaiKhoanKhachHang/>
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