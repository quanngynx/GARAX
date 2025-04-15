import thumbleForm from "@/assets/home/images/slide-booking.webp";

import MainForm from "./mainForm.tsx";

function formHelpDesk() {
  return (
    <div className="flex bg-slate-800 w-full rounded-2xl">
      <div className="hidden sm:block w-[50%] rounded-l-lg">
        <img src={thumbleForm} alt="real" className="w-full rounded-lg h-[100%] object-cover" loading="lazy"/>
      </div>
      <div className="sm:w-[50%] rounded-r-lg flex justify-center items-center  py-8">
        <MainForm />
      </div>
    </div>
  );
}



export default formHelpDesk;
