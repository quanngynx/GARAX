// import NotiTniy from '../../../assets/noti-tiny.svg?react'
function cardNotifications() {
    return ( 
        <div className="w-[342px] py-4 pl-4 bg-[#e2e8f0] rounded-xl justify-start items-center flex my-6">
           <div className="inline-flex flex-start items-center">
            {/* <div className="mr-2 w-[36px] h-[36px] flex justify-center items-center"><NotiTniy /></div> */}
            <div className="text-black text-[14px] font-medium font-['Inter'] leading-[18px] ">Thông báo (2)</div>
           </div>
        </div>
     );
}

export default cardNotifications;