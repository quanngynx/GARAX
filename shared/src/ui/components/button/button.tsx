import React from 'react';

interface IButton {
  onClickHandler: () => void;
  value: string;
  title: string;
}

function button({ onClickHandler, value, title }: IButton) {
  return (
    <button
      onClick={onClickHandler}
      value={value}
      className='text-xs font-semibold px-[20px] mr-[6px] text-black bg-transparent border-[0.6px] border-solid border-[#ccc] hover:border-[#121212] rounded-md cursor-pointer'
    >
      {title}
    </button>
  );
}

export default button;
