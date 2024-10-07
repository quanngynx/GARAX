import { useNavigate  } from "react-router-dom";

import imagecar from "../../assets/car-big.png";

import FormSearch from "./components/formSearch";
import FormHelpDesk from "./components/formHelpDesk";
import CardProduct from "./components/sliderCardProduct";
import BtnProducts from "./components/buttonFullWidth";
import AccessibleTabs from "./components/accessibleTabs";
function HomePage() {

  const history = useNavigate ();
  const navigateToProductPage = () => history('#');

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

      <div className="mt-12">
        <div className="">
          <div className="px-8">
            <div className="text-[#050b20] text-[40px] font-bold font-['DM Sans'] leading-10">
              Featured Listings
            </div>
            <AccessibleTabs tabsConfig={tabsConfig}/>
          </div>
        </div>
        <CardProduct />
        <BtnProducts navigateTo={navigateToProductPage}/>
      </div>
    </div>
  );
}

const tabsConfig = [
  {
    label: "Spare Parts",
    content: "Content Panel 1",
    icon: "😍"
  },
  {
    label: "Support Tools",
    content: "Content Panel 2",
    icon: "🤓"
  },
  {
    label: "Others",
    content: "Content Panel 3",
    icon: "🤓"
  }
];

export default HomePage;
