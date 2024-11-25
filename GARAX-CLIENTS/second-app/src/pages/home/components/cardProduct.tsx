import slugify from "slugify";

import TopRightTinyIcon from "../../../assets/home/icons/topRight-vector-tiny.svg?react";
import RangeTinyIcon from "../../../assets/icons/home/range-tiny.svg?react";
import FuelTypeTinyIcon from "../../../assets/icons/fuel-type-tiny.svg?react";
import TransmissionTypeTinyIcon from "../../../assets/icons/transmission-car-tiny.svg?react";
import ScheduleTinyIcon from "../../../assets/icons/schedule-tiny.svg?react";
import LineFull from "../../../components/line";

import { Link } from "react-router-dom";


function products({ card, index }) {
  const slug = slugify(card.title, { lower: true, strict: true })
  const productPath = `/product/${slug}`;
  return (
   <Link to={productPath}>
     <div
      className="flex-none w-[328px] p-4 bg-white rounded-lg shadow-md mx-4 mb-2"
      key={index}
    >
      <div className="">
        <img
          className="w-full h-32 object-contain mb-4 rounded-lg"
          src={card.image}
          alt="Card"
        />
      </div>  
      <div className="">
        <h3 className="text-[#050b20] text-lg font-medium font-['DM Sans'] leading-[2]">
          {card.title}
        </h3>
        <p className="text-[#050b20] text-sm font-normal font-['DM Sans'] leading-[14px]">
          {card.description}
        </p>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-4 text-[#050b20] text-sm font-normal font-['DM Sans'] leading-[14px]">
          <div className="flex items-center">
            <RangeTinyIcon />
            <div className="ml-3">{card.range}</div>
          </div>
          <div className="flex items-center">
            <FuelTypeTinyIcon />
            <div className="ml-3">{card.range}</div>
          </div>
          <div className="flex items-center">
            <TransmissionTypeTinyIcon />
            <div className="ml-3">{card.range}</div>
          </div>
          <div className="flex items-center">
            <ScheduleTinyIcon />
            <div className="ml-3">{card.range}</div>
          </div>
        </div>

        <div className="my-4 w-full">
          <LineFull />
        </div>

        <div className="inline-flex justify-between w-full">
          <div className="text-[#050b20] text-xl font-bold font-['DM Sans'] leading-[30px]">
            ${card.cost}
          </div>

          <div className="text-[#405ff2] text-[15px] font-medium font-['DM Sans'] leading-7 flex items-center">
            <div className="mr-2">View Details</div>
            <TopRightTinyIcon />
          </div>
        </div>
      </div>
    </div>
   </Link>
  );
}

export default products;
