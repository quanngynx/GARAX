import { Link } from "react-router-dom";
import slugify from "slugify";

import TopRightTinyIcon from "../../assets/home/icons/topRight-vector-tiny.svg?react";
import RangeTinyIcon from "../../assets/home/icons/range-tiny.svg?react";
import FuelTypeTinyIcon from "../../assets/home/icons/fuel-type-tiny.svg?react";
import TransmissionTypeTinyIcon from "../../assets/home/icons/transmission-car-tiny.svg?react";
import ScheduleTinyIcon from "../../assets/home/icons/schedule-tiny.svg?react";
import LineFull from "../line/line";

type TCard = {
  image: string
  title: string
  description: string
  descriptionDetail1: string
  descriptionDetail2: string
  range: string
  transmission: string
  fuel_type: string
  year: string
  cost: string
}

function card({
  image,
  title,
  description,
  range,
  transmission,
  fuel_type,
  year,
  cost,
} : TCard) {
  const slug = slugify(title, { lower: true, strict: true })
  const productPath = `${slug}`;
  return (
    <Link to={productPath}>
      <div className="flex-none w-[328px] p-4 bg-white rounded-lg shadow-md mx-4 mb-2">
      <div className="">
        <img
          className="w-full h-32 object-contain mb-4 rounded-lg"
          src={image}
          alt={title}
        />
      </div>
      <div className="">
        <h3 className="text-[#050b20] text-lg font-medium font-['DM Sans'] leading-[2]">
          {title}
        </h3>
        <p className="text-[#050b20] text-sm font-normal font-['DM Sans'] leading-[14px]">
          {description}
        </p>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-4 text-[#050b20] text-sm font-normal font-['DM Sans'] leading-[14px]">
          <div className="flex items-center">
            <RangeTinyIcon />
            <div className="ml-3">{range}</div>
          </div>
          <div className="flex items-center">
            <FuelTypeTinyIcon />
            <div className="ml-3">{transmission}</div>
          </div>
          <div className="flex items-center">
            <TransmissionTypeTinyIcon />
            <div className="ml-3">{fuel_type}</div>
          </div>
          <div className="flex items-center">
            <ScheduleTinyIcon />
            <div className="ml-3">{year}</div>
          </div>
        </div>

        <div className="my-4 w-full">
          <LineFull />
        </div>

        <div className="inline-flex justify-between w-full">
          <div className="text-[#050b20] text-xl font-bold font-['DM Sans'] leading-[30px]">
            ${cost}
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

export default card;
