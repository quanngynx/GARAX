import SnvelopeSolidIcon from '../../../components/icons/envelopeSolid'
import { MingcuteNotificationLine } from "../../../components/icons/notification";
import PhoneTiny from '../../../components/icons/phoneTiny'
import LoadFileTiny from '../../../components/icons/loadList'

import LinkCV from "./linkCV";
const extendInfor = [
  {
    icon: <SnvelopeSolidIcon />,
    showInfo: "nguyenvana@gmail.com",
  },
  {
    icon: <MingcuteNotificationLine />,
    showInfo: "abc 12/12/12, phường Trung Mỹ Tây, q.12, HCM",
  },
  {
    icon: <PhoneTiny />,
    showInfo: "+84 374-4444-252",
  },
  {
    icon: <LoadFileTiny />,
    showInfo: <LinkCV />,
  },
];
function cardContactInfo() {
  return (
    <div className="w-[342px] py-4 px-4 bg-[#e2e8f0] rounded-xl flex flex-col my-6">
      {extendInfor.map((i, index) => (
        <div key={index} className="inline-flex flex-start items-center">
          <div className="mr-2 w-[36px] h-[36px] flex justify-center items-center">{i.icon}</div>
          <div className="text-black text-[14px] font-medium font-['Inter'] leading-[18px] ">
            {i.showInfo}
          </div>
        </div>
      ))}
    </div>
  );
}

export default cardContactInfo;
