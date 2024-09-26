import { Breadcrumbs } from "@mui/material";
function caiDatTaiKhoan() {
    return ( 
        <div className="w-full h-100% scroll-smooth focus:scroll-auto: ">
            <div className="p-3 w-full h-50px flex " >
                <p className="text-2xl mr-1">Customer</p>
                <p className="text-2xl font-semibold" >/ Account</p>
            </div>
            <div>
                <Information></Information>
            </div>
            <div className="w-full"><Customer></Customer></div>
            <div className="p-3 w-full h-50px flex " >
                <p className="text-2xl mr-1">Staff</p>
                <p className="text-2xl font-semibold" >/ Account</p>
            </div>
            <div><Information></Information> </div>
            <div className="w-full"><Staff></Staff></div>
        </div>
     );
     function Customer(){
        return(
            <div className="overflow-y-auto w-100% h-[250px]    ">
            </div>
        );
    }
     function Staff() {
        return(
            <div className="overflow-y-auto w-100% h-[250px] ">
            </div>
            
        );
     }
     function Information(){
        return(
            <div className=" p-2  w-full h-100%">
             <div className="  justify-center gap-x-36 gird-cols-5  flex w-50%">
                <div className="w-100% text-xs">UserName</div>
                <div className="w-100% text-xs">Password</div>
                <div className="w-100% text-xs">Role</div>
                <div className="w-100% text-xs">Email</div>
                <div className="w-100% text-xs">Phone</div>
             </div>
            </div>
        );

     }
}

export default caiDatTaiKhoan;