import InputEmail from "./inputEmail";

function headFooter() {
  return (
    <div className="w-full md:flex md:justify-between px-10 py-8">
      <div className="md:w-[50%] flex flex-col justify-center items-start">
        <div className="text-white text-3xl font-medium font-['DM Sans'] ">Join Garax</div>
        <div className="text-white text-[15px] font-normal font-['DM Sans']">Nhận cập nhật, các bộ phận mua sắm và hơn thế nữa!</div>
      </div>
      <div className="md:w-[50%]">
        <InputEmail />
      </div>
    </div>
  );
}

export default headFooter;
