
import ComboCleaning from "./components/comboCleaning";

function cleaningPage() {
  return (
    <div className="flex flex-col bg-white items-center py-8">
      <div className="mb-6 px-16 w-[1361.47px]">
        <div className="">
          <div className="text-[#050b20] text-[32px] font-bold font-['DM Sans'] leading-10 mb-8">
            Cleaning Services :
          </div>

          <ComboCleaning />
        </div>
      </div>
    </div>
  );
}

export default cleaningPage;
