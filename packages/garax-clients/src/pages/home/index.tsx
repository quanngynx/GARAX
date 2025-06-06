import { useNavigate } from "react-router-dom";
import { Carousel, Tabs, TabsProps } from "antd";

// import { useCheckAuth } from "../auth/checkToken";

// import { ITabsConfig } from './interfaces'

import imagecar from "@/assets/home/images/car-big.webp";
import WhyChooseUs from "./components/Whychose";
import FormSearch from "./components/formSearch";
import FormHelpDesk from "./components/formHelpDesk";
import CardProduct from "./components/sliderCardProduct";
import BtnProducts from "./components/buttonFullWidth";
// import AccessibleTabs from "./components/accessibleTabs";
import BroswerByType from "./components/broswerByType";
import BestCar from "./components/Bestcar";
import ReviewFeedback from "./components/reviewFeedback";
import {Line} from "@/components/line/line";
import { NextArrow, PrevArrow } from "@/components/carousel";
// import { cardProducts } from "@/__mock__";
// import CardProducts from './components/cardProduct' 

const itemsTab: TabsProps['items'] = [
  {
    key: '1',
    label: 'Phụ tùng',
    children: <CardProduct />,
  },
  {
    key: '2',
    label: 'Công cụ hỗ trợ',
    children: <CardProduct />,
  },
  {
    key: '3',
    label: 'Khác',
    children: <CardProduct />,
  },
];

export function HomePage(): JSX.Element {
  const history = useNavigate();
  const navigateToProductPage = () => {
    history("/product");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
  <div className="md:w-[1222px] bg-white h-[100%] md:py-[84px]">
      <div className="relative">
        <div className="">
          {/* <img
            src={imagecar}
            alt="A car in a desert landscape"
            className="w-full rounded-lg h-[300px] md:h-[480px] object-cover"
          /> */}
          <Carousel
            arrows
            autoplay
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}
          >
              <img
                src={imagecar}
                alt="A car in a desert landscape"
                className="w-full rounded-lg h-[300px] md:h-[480px] object-cover"
              />
              <img
                src={imagecar}
                alt="A car in a desert landscape"
                className="w-full rounded-lg h-[300px] md:h-[480px] object-cover"
              />
              <img
                src={imagecar}
                alt="A car in a desert landscape"
                className="w-full rounded-lg h-[300px] md:h-[480px] object-cover"
              />
              <img
                src={imagecar}
                alt="A car in a desert landscape"
                className="w-full rounded-lg h-[300px] md:h-[480px] object-cover"
              />
          </Carousel>
        </div>
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

          <div className="w-full inset-x-0 bottom-0 transform translate-y-[60%] md:translate-y-0">
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
        <div className="md:pr-8 mb-4">
          <div className="text-[#050b20] text-2xl md:text-[40px] font-bold font-['DM Sans'] leading-7 md:leading-10">
            Danh sách sản phẩm
          </div>
          {/* <AccessibleTabs tabsConfig={tabsConfig} /> */}
        </div>

        {/* Product Cards */}
        <Tabs defaultActiveKey="1" items={itemsTab} onChange={onChange} />
        
        {/* <CardProduct /> */}

        {/* Button to navigate to product page */}
        <BtnProducts navigateTo={navigateToProductPage} />
      </div>
    </div>
  </div>
  );
}
