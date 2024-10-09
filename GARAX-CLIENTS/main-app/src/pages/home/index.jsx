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
    <div className="md:w-full bg-white h-auto p-4 md:p-20">
    {/* Image section with overlay text */}
    <div className="relative">
      <img
        src={imagecar}
        alt="A car in a desert landscape"
        className="w-full rounded-lg h-[300px] md:h-[600px] object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
        <div className="absolute flex flex-col justify-center items-center text-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            A Vehicle For Every Lifestyle
          </h1>
          <h1 className="text-2xl md:text-4xl font-bold">Today</h1>
          <p className="mt-2 text-sm md:text-base">
            Find cars for sale and for rent near you
          </p>
        </div>

        {/* Spacer div to create space between text and form */}
        
         <div className=" inset-x-0 bottom-0 transform translate-y-[80%] md:translate-y-0">
          <FormSearch />
        </div>
      </div>
    </div>

    {/* HelpDesk Form Section */}
    <FormHelpDesk />

    {/* Featured Listings Section */}
    <div className="mt-8 md:mt-12">
      <div className="px-4 md:px-8">
        <div className="text-[#050b20] text-2xl md:text-[40px] font-bold font-['DM Sans'] leading-7 md:leading-10">
          Featured Listings
        </div>
        <AccessibleTabs tabsConfig={tabsConfig} />
      </div>

      {/* Product Cards */}
      <CardProduct />

      {/* Button to navigate to product page */}
      <BtnProducts navigateTo={navigateToProductPage} />
    </div>
  </div>
  );
}

const tabsConfig = [
  {
    label: "Spare Parts",
    content: "Content Panel 1",
  },
  {
    label: "Support Tools",
    content: "Content Panel 2",
  },
  {
    label: "Others",
    content: "Content Panel 3",
  }
];

export default HomePage;
