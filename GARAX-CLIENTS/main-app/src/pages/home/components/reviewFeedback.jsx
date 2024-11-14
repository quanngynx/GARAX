import QuotationMarks from '../../../assets/icons/Quotation-Marks.svg?react'
function reviewFeedback() {
  const feedBack = [
    {
      tit: "",
      detail: "",
      name: "",
      role: "",
    },
    {
      tit: "",
      detail: "",
      name: "",
      role: "",
    },
    {
      tit: "",
      detail: "",
      name: "",
      role: "",
    },
  ];
  return (
    <div className="flex mt-36 bg-slate-800 max-h-[600px] w-full h-[600px] rounded-2xl">
      <div className="w-full flex flex-row  justify-between items-start">
        <div className="text-[40px] font-bold font-['DM Sans'] leading-10 text-white">
          What our customers say
        </div>
        <div className="text-[15px] font-normal font-['DM Sans'] leading-7 text-white">
          Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star reviews
        </div>
      </div>

      <div className="grid grid-flow-row gap-4">
        <div className='w-[448px] h-[338px] bg-slate-300'>
        <div className="p-3">
          {/* TITLE */}
          <div className=""></div>
          {/* DETAIL */}
          <div className=""></div>
          {/* AVARTAR */}
          <div className=""></div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default reviewFeedback;
