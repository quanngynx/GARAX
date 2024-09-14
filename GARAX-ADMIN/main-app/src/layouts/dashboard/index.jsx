import { Outlet } from "react-router-dom";

import Navbar from "./navbar";
import Sidebar from "./sidebar";

function dashboardLayout() {
  return (
    <div className="bg-[#F2F3F3]">
      <Navbar />
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default dashboardLayout;
