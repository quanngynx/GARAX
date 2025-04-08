"use client";

import {useState, useEffect} from 'react';
import {useWindowSize} from 'react-use';

import dayjs from 'dayjs';

import { RotateSolidIcon } from '../icons';
function PageHeader({ namePage } : { namePage: string }) {
    const [currentTime, setCurrentTime] = useState(new Date());
    const {width} = useWindowSize();
    const dateFormat = width < 768 ? 'MM.DD.YYYY' : 'MMMM DD, YYYY';    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, [currentTime]);
  return (
    <div className="bg-white border-[0.5px] border-solid border-slate-400 w-full my-6 px-4 py-4 rounded-xl">
      <div className="flex justify-between items-center w-full h-full">
        <div className="font-bold text-2xl font-['Inter'] leading-[18px]">{namePage}</div>
        <div className="inline-flex text-[#1c1c1c] text-base font-semibold font-['Inter'] leading-[18px]">
          <button className=''>
          <div className="inline-flex items-center mr-6">
            <div className="">Làm mới dữ liệu</div>
            <div className="ml-3">
              <RotateSolidIcon className="inline-block transition-transform duration-300 ease-in-out hover:rotate-180"/>
            </div>
          </div>
          </button>
          <div className="h-11 bg-body flex items-center justify-center rounded-xl px-9 font-bold text-base border border-slate-400 lg:w-max">
                {dayjs(currentTime).format(`${dateFormat} HH`)}
                <span className="animate-pulse-fast">:</span>
                {dayjs(currentTime).format('mm A')}
            </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
