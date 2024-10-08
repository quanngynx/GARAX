import { Outlet } from "react-router-dom";

function onlyCanvas() {
    return ( 
        <div className="w-full h-screen bg-opacity-20 flex justify-center bg-slate-400">
          <div className="w-full flex justify-center items-center h-screen relative bg-white rounded-md">
            <Outlet />
          </div>
    </div>
     );
}

export default onlyCanvas;