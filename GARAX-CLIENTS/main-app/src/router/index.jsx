import { Navigate, useRoutes } from 'react-router-dom'

// layout
import MainLayout from '../layouts/main/index'

// page
import HomePage from '../pages/home/index'

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
                }
            ]
        }
    ]);
}

export default Routes;