function button({ onClickHandler, value, title }) {
  return (
    <button onClick={onClickHandler} value={value} 
    className="py-[10px] px-[20px] mr-[6px] text-black bg-transparent border-[0.6px] border-solid border-[#ccc] hover:border-[#121212] rounded-md cursor-pointer"
    >
      {title}
    </button>
  );
}

export default button;
