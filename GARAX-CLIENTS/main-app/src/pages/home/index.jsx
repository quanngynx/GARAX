import imagecar from "../../assets/car.png"
function HomePage() {
    return ( 
        <div className="  bg-white p-20 ">
                    <div className="relative">
                            <img src={imagecar} alt="A car in a desert landscape" className="w-full  rounded-lg h-[100%] object-cover" />
                            <div className="absolute inset-0 flex flex-col justify-center   items-center text-white">
                                <div className="absolute justify-center items-center flex flex-col ">
                                <h1 className="text-4xl font-bold">A Vehicle For Every Lifestyle</h1>
                                <h1 className="text-4xl font-bold">Today</h1>
                                <p className="mt-2">Find cars for sale and for rent near you</p>
                                </div>
                                <div className="text-black mt-[510px] bg-opacity-15 shadow-lg  bg-white rounded-lg p-4 mx-auto w-auto ">
                                     <div className="flex justify-center space-x-4 mb-4">
                                <button className="px-4 py-2 text-white  rounded-full">All</button>
                                <button className="px-4 py-2 text-white rounded-full">New</button>
                                <button className="px-4 py-2 text-white rounded-full">Used</button>
                                </div>
                                <div className=" flex grid-cols-4 gap-4">
                                <div>
                                    <label className="block mb-2">Select Makes</label>
                                    <select className="w-full p-2 border rounded">
                                        <option>Audi</option>
                                    </select>
                                </div>
                                <div>
                                    <label className=" block mb-2">Select Models</label>
                                    <select className="bg-opacity-15 w-full p-2 border rounded">
                                        <option>Q7</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block  mb-2">Year</label>
                                    <select className="w-full p-2  border rounded">
                                        <option ><label className=" ">0 - 2024</label></option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-2">Select Price</label>
                                    <select className="w-full p-2 border rounded">
                                        <option>All Prices</option>
                                    </select>
                                </div>
                                <div className=" mt-7  block justify-center mt-4">
                                <button className="px-6 py-2 bg-blue-600 text-white rounded-full">Search</button>
                            </div>
                            </div>
                            
                        </div>
                            </div>
                        </div>
                       <div className=" mt-36 bg-orange-600 w-full h-[100px]">

                       </div>
             
        </div>
     );
}

export default HomePage;