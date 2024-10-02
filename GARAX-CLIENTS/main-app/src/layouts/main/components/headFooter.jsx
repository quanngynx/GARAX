import InputEmail from "./inputEmail";

function headFooter() {
  return (
    <div className="w-full flex justify-between px-10 py-10">
      <div className="w-[50%]">
        <div className="text-white text-3xl font-medium font-['DM Sans']">Join Garax</div>
        <div className="text-white text-[15px] font-normal font-['DM Sans']">Receive updating updates, shopping parts & more!</div>
      </div>
      <div className="w-[50%]">
        <InputEmail />
      </div>
    </div>
  );
}

export default headFooter;
