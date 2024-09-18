function Navbar() {
    return ( 
        <div className="w-100% h-[120px]">
            <div className="w-100% h-[118px] flex justify-between">
                <div className="w-33$ h-[118px]">
                    <div className="w-100% h-[58px] flex justify-between">
                        <div className="text-gray-600">Pages</div>
                        <div className="text-black font-medium">/Dashboard</div>
                    </div>
                    <div className="w-100% h-[58px] font-semibold text-2xl">Dashboard</div>
                </div>
                <div className="w-33% h-[118px] bg-red-300">2</div>
                <div>3</div>
            </div>
            <LineNavbar/>
        </div>
     );
}
function LineNavbar(){
    return (
        <div className="w-100% h-[1px] bg-black"></div>
    )
}

export default Navbar;