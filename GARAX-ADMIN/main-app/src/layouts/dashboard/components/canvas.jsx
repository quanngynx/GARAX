import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
function canvas() {
  return (
    <div className="w-full">
      <div className="bg-white mx-4 mt-4 rounded-2xl">
        <div className="p-[10px]">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default canvas;
