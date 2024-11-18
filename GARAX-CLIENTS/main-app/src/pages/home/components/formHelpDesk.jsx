import thumbleForm from "../../../assets/images/slide-booking.webp";

import MainForm from "./mainForm";

function formHelpDesk() {
  return (
    <div className="flex mt-16 bg-slate-800 max-h-[600px] w-full h-[600px] rounded-2xl">
      <div className="w-[50%] rounded-l-lg">
        <img src={thumbleForm} alt="real" className="w-full rounded-lg h-[100%] object-cover" loading="lazy"/>
      </div>
      <div className="w-[50%] rounded-r-lg flex justify-center items-center">
      <MainForm />
      </div>
    </div>
  );
}



export default formHelpDesk;
