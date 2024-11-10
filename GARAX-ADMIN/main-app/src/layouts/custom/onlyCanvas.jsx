import { Outlet } from "react-router-dom";

function OnlyCanvas() {
    return ( 
        <div className="bg-slate-100 w-full h-[100vh] flex justify-center items-center">
            <Outlet />
        </div>
     );
}

export default OnlyCanvas;