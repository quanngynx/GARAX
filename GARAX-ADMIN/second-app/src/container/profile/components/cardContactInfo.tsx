// import NotiTniy from "../../../assets/noti-tiny.svg?react";
// import EnvelopTiny from '../../../assets/envelope-solid-tiny.svg?react'
// import PhoneTiny from '../../../assets/Phone_fill.svg?react'
// import LoadFileTiny from '../../../assets/Load_list_fill.svg?react'

import LinkCV from "./linkCV";
const extendInfor = [
  {
    // icon: <EnvelopTiny />,
    showInfo: "nguyenvana@gmail.com",
  },
  {
    // icon: <NotiTniy />,
    showInfo: "abc 12/12/12, phường Trung Mỹ Tây, q.12, HCM",
  },
  {
    // icon: <PhoneTiny />,
    showInfo: "+84 374-4444-252",
  },
  {
    // icon: <LoadFileTiny />,
    showInfo: <LinkCV />,
  },
];
function cardContactInfo() {
  return (
    <div className="w-[342px] py-4 px-4 bg-[#f5f6f7] rounded-2xl flex flex-col my-6">
      {extendInfor.map((i, index) => (
        <div key={index} className="inline-flex flex-start items-center">
          {/* <div className="mr-2 w-[36px] h-[36px] flex justify-center items-center">{i.icon}</div> */}
          <div className="text-black text-[14px] font-medium font-['Inter'] leading-[18px] ">
            {i.showInfo}
          </div>
        </div>
      ))}
    </div>
  );
}

export default cardContactInfo;
