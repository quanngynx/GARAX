import { Outlet } from "react-router-dom";
import Header from './components/header'
import HeaderVu from './components/header-Vu'

import Footer from './components/footer'
function mainLayout() {
    return ( 
        <>
        <HeaderVu />
            <Outlet/>
        <Footer />
        </>
     );
}

export default mainLayout;