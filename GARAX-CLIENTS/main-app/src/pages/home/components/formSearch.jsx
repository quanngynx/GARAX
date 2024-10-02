function formSearch() {
    return ( 
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
                  <option>
                    <label className=" ">0 - 2024</label>
                  </option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Select Price</label>
                <select className="w-full p-2 border rounded">
                  <option>All Prices</option>
                </select>
              </div>
              <div className=" mt-7  block justify-center">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-full">
                  Search
                </button>
              </div>
            </div>
          </div>
     );
}

export default formSearch;