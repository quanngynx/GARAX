import QuotationMarks from '../../../assets/icons/Quotation-Marks.svg?react'
import Avt1 from '../../../assets/icons/home/img/test1-150x150.jpg.png'
import Avt2 from '../../../assets/icons/home/img/test1-150x150.jpg.png'
import Avt3 from '../../../assets/icons/home/img/test1-150x150.jpg.png'
function reviewFeedback() {
  const feedBack = [
    {
      tit: "Công việc tuyệt vời",
      img: Avt1,
      icon: <QuotationMarks />,
      detail: "Thiết kế tuyệt vời, dễ tùy chỉnh và chất lượng thiết kế tuyệt vời trên nền tảng đám mây để tối ưu hóa hiệu suất. Và chúng tôi đã không làm như vậy với các thiết kế ban đầu của mình.",
      name: "Leslie Alexander",
      role: "Facebook",
    },
    {
      tit: "Thiết kế tuyệt vời",
      img: Avt2,
      icon: <QuotationMarks />,
      detail: "Thiết kế tuyệt vời, dễ tùy chỉnh và chất lượng thiết kế tuyệt vời trên nền tảng đám mây để tối ưu hóa hiệu suất. Và chúng tôi đã không làm như vậy với các thiết kế ban đầu của mình.",
      name: "Floyd Miles",
      role: "Designer",
    },
    {
      tit: "Tuyệt với",
      img: Avt3,
      icon: <QuotationMarks />,
      detail: "Thiết kế tuyệt vời, dễ tùy chỉnh và chất lượng thiết kế tuyệt vời trên nền tảng đám mây để tối ưu hóa hiệu suất. Và chúng tôi đã không làm như vậy với các thiết kế ban đầu của mình.",
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
    <div className="flex flex-col mt-36 max-h-[500px] w-full h-[500px] rounded-2xl">
      <div className="w-full flex flex-row  justify-between items-start">
        <div className="text-[40px] font-bold font-['DM Sans'] leading-10 text-black mb-8">
          Khách hàng nói gì về chúng tôi
        </div>
        <div className="text-[15px] font-normal font-['DM Sans'] leading-7 text-black mb-4 sm:mb-0">
          Đánh giá 4.7 / 5 dựa trên 28,370 lượt đánh giá 
        </div>
      </div>

      <div className="grid gap-8 justify-center items-center grid-cols-3 text-black">
        {feedBackDiv}
      </div>
    </div>
  );
}

export default reviewFeedback;
