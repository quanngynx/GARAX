import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import ScrollToTop from "@/components/scrollToTop/scrollToTop";
import { TopBar } from "./components/topBar";

function mainLayout() {
  return (
    <div className="bg-white">
      <ScrollToTop />
      <div>
        <TopBar />
        <Header />
      </div>
      <div className="flex justify-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default mainLayout;
