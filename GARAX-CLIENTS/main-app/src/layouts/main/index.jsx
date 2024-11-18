import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import ScrollToTop from "../../components/scrollToTop";

function mainLayout() {
  return (
    <div className="bg-white">
      <ScrollToTop />
      <Header />
      <div className="h-[80px]"></div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default mainLayout;
