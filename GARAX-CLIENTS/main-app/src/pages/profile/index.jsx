import LeftSidebar from "./components/leftSidebar";
import RightContent from "./components/rightContent";
function profileUser() {
  return (
    <div className="flex flex-col bg-white items-center py-8 h-[1000px]">
      <div className="mb-6 px-16 w-[1361.47px]">
        <div className="">
          <div className="text-[#050b20] text-[32px] font-bold font-['DM Sans'] leading-10 mb-8">
            Thông tin người dùng:
          </div>

          {/* <ComboCleaning /> */}
          <div className="flex flex-row items-center">
            <LeftSidebar />

            <RightContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default profileUser;
