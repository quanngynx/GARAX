import QuotationMarks from '../../../assets/icons/Quotation-Marks.svg?react'
import Avt1 from '../../../assets/icons/home/img/test1-150x150.jpg.png'
import Avt2 from '../../../assets/icons/home/img/test1-150x150.jpg.png'
import Avt3 from '../../../assets/icons/home/img/test1-150x150.jpg.png'
function reviewFeedback() {
  const feedBack = [
    {
      tit: "Great Work",
      img: Avt1,
      icon: <QuotationMarks />,
      detail: "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn't on our original designs.",
      name: "Leslie Alexander",
      role: "Facebook",
    },
    {
      tit: "Awesome Design",
      img: Avt2,
      icon: <QuotationMarks />,
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam sed do eiusmod",
      name: "Floyd Miles",
      role: "Designer",
    },
    {
      tit: "Good Job",
      img: Avt3,
      icon: <QuotationMarks />,
      detail: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
      name: "Dianne Russell",
      role: "Marketing",
    },
  ];

  const feedBackDiv = feedBack.map((i) => (
    <div key={i} className='sm:block flex justify-center'>
      <div className="w-[428px] min-h-[280px] bg-[#ebf7fe] rounded-2xl shadow">
        <div className="p-8">
          {/* TITLE */}
          <div className="flex flex-row justify-between items-center">
            <div className="text-xl font-medium font-['DM Sans'] leading-[37px]">{i.tit}</div>
            <div>{i.icon}</div>
          </div>
          {/* DETAIL */}
          <div className="text-[15px] font-normal font-['DM Sans'] leading-7">{i.detail}</div>
          {/* AVARTAR */}
          <div className="flex flex-row justify-start items-center">
            <div>
              <image className='w-[60px]' src={i.img} alt='demo'/>
            </div>
            <div className='flex flex-col items-center'>
              <div className="text-base font-medium font-['DM Sans'] leading-tight">{i.name}</div>
              <div className="text-sm font-normal font-['DM Sans'] leading-relaxed">{i.role}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="flex flex-col mt-36 w-full rounded-2xl">
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:px-0 px-8">
        <div className="w-max text-[24px] sm:text-[40px] font-bold font-['DM Sans'] leading-10 text-black mb-2 sm:mb-8">
          What our customers say
        </div>
        <div className="text-[15px] font-normal font-['DM Sans'] leading-7 text-black mb-4 sm:mb-0">
          Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star reviews
        </div>
      </div>

      <div className="grid gap-8 justify-center items-center grid-cols-1 md:grid-cols-3 text-black">
        {feedBackDiv}
      </div>
    </div>
  );
}

export default reviewFeedback;
