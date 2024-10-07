import { Navigate, useRoutes } from 'react-router-dom'

// layout
import MainLayout from '../layouts/main/index'

// page
import HomePage from '../pages/home/index'
import LoginPage from '../pages/auth/login'
import RegisterPage from '../pages/auth/register'
import path from 'path'
import OnlyCanvas from '../../../../GARAX-ADMIN/main-app/src/layouts/custom/onlyCanvas'

function Routes() {
    return useRoutes([
    
    {
            
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element: <Navigate to='/home' replace/>
                },
                {
                    path: 'home',
                    element: <HomePage />
                    
                },  
                // {
                //     path: 'auth',
                //     element: <OnlyCanvas/>,
                //     children:[
                //         {
                //         path:'register',
                //         element: <RegisterPage />,
                //         },
                //         {
                //             path: 'login',
                //             element:<LoginPage/>
                //         }
                //     ]
                // }
            ]
            
    },

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
    }
    ]);
}

export default Routes;