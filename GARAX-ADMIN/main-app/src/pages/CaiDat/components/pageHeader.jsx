import {useState, useEffect} from 'react';
import {useWindowSize} from 'react-use';

import dayjs from 'dayjs';

import RotateIcon from "../../../assets/rotate-solid.svg?react";
function pageHeader() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentTime, setCurrentTime] = useState(new Date());
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {width} = useWindowSize();
    const dateFormat = width < 768 ? 'MM.DD.YYYY' : 'MMMM DD, YYYY';    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, [currentTime]);
  return (
    <div className="bg-[#F5F6F7] w-full h-[80px] mt-6 px-4 py-6">
      <div className="flex justify-end items-center w-full h-full">
        <div className="inline-flex text-[#1c1c1c] text-base font-semibold font-['Inter'] leading-[18px]">
          <div className="inline-flex items-center mr-6">
            <div className="">Data refresh</div>
            <div className="ml-3">
              <RotateIcon />
            </div>
          </div>
          <div className="h-11 bg-body flex items-center justify-center rounded-md px-9 font-heading font-bold text-header text-base border border-input-border lg:w-[310px]">
                {dayjs(currentTime).format(`${dateFormat} HH`)}
                <span className="animate-pulse-fast">:</span>
                {dayjs(currentTime).format('mm A')}
            </div>
        </div>
      </div>
    </div>
  );
}

export default pageHeader;
