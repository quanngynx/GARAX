import { Outlet } from "react-router-dom";

import Header from './components/header'
import Footer from './components/footer'
function mainLayout() {
    return ( 
        <>
        <Header />
            <Outlet />
        <Footer />
        </>
     );
}

export default mainLayout;