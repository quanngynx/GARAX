import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useCheckAuth } from "../auth/checkToken";

import imagecar from "../../assets/car-big.webp";
import WhyChooseUs from "./components/Whychose";
import FormSearch from "./components/formSearch";
import FormHelpDesk from "./components/formHelpDesk";
import CardProduct from "./components/sliderCardProduct";
import BtnProducts from "./components/buttonFullWidth";
import AccessibleTabs from "./components/accessibleTabs";
import BroswerByType from "./components/broswerByType";
import BestCar from "./components/Bestcar";
import ReviewFeedback from "./components/reviewFeedback";
import Line from "../../components/line/line";
function HomePage() {
  const history = useNavigate();
  const navigateToProductPage = () => {
    history("/product");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
  <div className="md:w-full bg-white h-[100%] p-4 md:p-20">
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
            Một chiếc xe cho mọi phong cách sống
            </h1>
            <h1 className="text-2xl md:text-4xl font-bold">Hôm nay</h1>
            <p className="mt-2 text-sm md:text-base">
            Tìm xe bán và cho thuê gần bạn
            </p>
          </div>

          {/* Spacer div to create space between text and form */}

          <div className=" inset-x-0 bottom-0 transform translate-y-[80%] md:translate-y-0">
            <FormSearch />
          </div>
        </div>
      </div>

     
      <div>
      {/* Broswer by type */}
      <BroswerByType />

      {/* Why choose us */}
      <WhyChooseUs />
      {/* The best thing for our car */}
      <BestCar />
      <Line />
      {/* What customer say */}
      <ReviewFeedback />

      {/* HelpDesk Form Section */}
      <FormHelpDesk />

      </div>
       
     
  
      <div>
      {/* Featured Listings Section */}
      <div className="mt-8 md:mt-12">
        <div className="px-4 md:px-8">
          <div className="text-[#050b20] text-2xl md:text-[40px] font-bold font-['DM Sans'] leading-7 md:leading-10">
            Danh sách sản phẩm
          </div>
          <AccessibleTabs tabsConfig={tabsConfig} />
        </div>

        {/* Product Cards */}
        <CardProduct />

        {/* Button to navigate to product page */}
        <BtnProducts navigateTo={navigateToProductPage} />
      </div>
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
  },
];

export default HomePage;
