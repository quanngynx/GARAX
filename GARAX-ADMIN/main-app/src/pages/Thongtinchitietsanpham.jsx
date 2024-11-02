import iconBack from "../../../assets/iconBack.png";



function Thongtinchitietsanpham() {
    return ( 
        <div className="">
            <div className="mb-6 Overflow:hidden">
                <div className="p-3 w-full h-auto flex justify-between">
                    <div className="h-auto flex">
                        <img
                            src={iconBack}
                            className="w-[30px] h-[30px]"
                        />
                        <p className="text-xl font-normal">Thông tin chi tiết sản phẩm</p>
                    </div>
                   
                    <div className="h-auto">
                        <button className="text-sm font-semibold border-solid border-2 border-black">
                            <p className="m-2">Chỉnh sửa thông tin</p>
                        </button>
                    </div>
                </div>
                <div className="flex justify-between p-3 w-full h-[600px] ">
                    <div className="w-[40%] h-full mr-10 ">
                        <div className="h-[80%] w-full">
                            <div>
                                3
                            </div>
                            <div>
                                
                            </div>
                        </div>
                        <div className="h-[20%] w-full">
                            <p className="text-center sm:text-left">XD Series - Mâm bánh xe XD 811 Rockstar II 17x9 là Model thế hệ thứ 2 nằm trong Series Rockstar Huyền thoại của thương hiệu KMC – XD (Thuộc tập đoàn phân phối Mâm độ MHT Hoa Kỳ)</p>
                        </div>
                    </div>
                    <div className="w-[60%] h-auto ">
                        <div className="bg-[#F5F6F7] w-full h-auto border-solid border-2 border-black rounded-2xl">
                            <p className="text-xl font-semibold m-10 h-auto w-full">Chi tiết sản phẩm</p>
                            <div className="h-auto w-auto border-black border-b-2 ml-10 mr-10 flex justify-between ">
                                <p className="text-md font-normal mt-5 mb-5">Tên sản phẩm:</p>
                                <p className="text-md font-normal mt-5 mb-5">XD Series - Mâm bánh xe XD 811 Rockstar II 17x9</p>
                            </div>
                            <div className="h-auto w-auto border-black border-b-2 ml-10 mr-10 mt-5 mb-5 flex justify-between">
                                <p className="text-md font-normal mt-5 mb-5">Hãng:</p>
                                <p className="text-md font-normal mt-5 mb-5">KMC-XD</p>
                            </div>
                            <div className="h-auto w-auto border-black border-b-2 ml-10 mr-10 mt-5 mb-5 flex justify-between">
                                <p className="text-md font-normal mt-5 mb-5">Sản xuất:</p>
                                <p className="text-md font-normal mt-5 mb-5">Đức</p>
                            </div>
                            <div className="h-auto w-auto border-black border-b-2 ml-10 mr-10 mt-5 mb-5 flex justify-between">
                                <p className="text-md font-normal mt-5 mb-5">Loại phụ tùng:</p>
                                <p className="text-md font-normal mt-5 mb-5">Phụ tùng ngoại thất ô tô</p>
                            </div>
                            <div className="h-auto w-auto border-black border-b-2 ml-10 mr-10 mt-5 mb-5 flex justify-between">
                                <p className="text-md font-normal mt-5 mb-5">Sản phẩm dành cho:</p>
                                <p className="text-md font-normal mt-5 mb-5">SUV, Sedan, CrossOver</p>
                            </div>
                            <div className="h-auto w-auto border-black border-b-2 ml-10 mr-10 mt-5 mb-5 flex justify-between">
                                <p className="text-md font-normal mt-5 mb-5">Giá:</p>
                                <p className="text-md font-normal mt-5 mb-5">6.500.000 VNĐ</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
     );
}

export default Thongtinchitietsanpham;