import thumbleForm from "../../../assets/images/slide-booking.webp";

import MainForm from "./mainForm.tsx";

function formHelpDesk() {
  return (
    <div className="flex mt-16 bg-slate-800 max-h-[600px] w-full sm:h-[600px] rounded-2xl py-8 sm:py-0">
      <div className="hidden sm:block w-[50%] rounded-l-lg">
        <img src={thumbleForm} alt="real" className="w-full rounded-lg h-[100%] object-cover" loading="lazy"/>
      </div>
      <div className="sm:w-[50%] rounded-r-lg flex justify-center items-center">
      <MainForm />
      </div>
    </div>
  );
}



export default formHelpDesk;
