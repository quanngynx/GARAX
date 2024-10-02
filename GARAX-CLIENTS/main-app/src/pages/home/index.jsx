import imagecar from "../../assets/car-big.png";

import FormSearch from "./components/formSearch";
import FormHelpDesk from "./components/formHelpDesk";
function HomePage() {
  return (
    <div className="  bg-white p-20 ">
      <div className="relative">
        <img
          src={imagecar}
          alt="A car in a desert landscape"
          className="w-full  rounded-lg h-[100%] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center   items-center text-white">
          <div className="absolute justify-center items-center flex flex-col ">
            <h1 className="text-4xl font-bold">
              A Vehicle For Every Lifestyle
            </h1>
            <h1 className="text-4xl font-bold">Today</h1>
            <p className="mt-2">Find cars for sale and for rent near you</p>
          </div>

          <FormSearch />
        </div>
      </div>

      <FormHelpDesk />
      
      <div className="mt-36 bg-orange-600 w-full h-[100px]"></div>
    </div>
  );
}

export default HomePage;
