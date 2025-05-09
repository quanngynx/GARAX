import { ScrollToTop } from "@/components/scrollToTop";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

function onlyContact() {
    return (
        <div className="bg-white">
            <ScrollToTop />
            <div>
                <Header />
            </div>
            <div className="flex justify-center">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default onlyContact;