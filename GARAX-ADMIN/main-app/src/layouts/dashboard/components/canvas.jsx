import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
function canvas() {
  return (
    <div className="sm:w-full">
      <div className="bg-white mx-4 mt-4 rounded-2xl min-h-[89vh] ">
        <div className="p-[10px] max-w-full">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default canvas;
