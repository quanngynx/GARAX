import HeadFooter from "./headFooter";
import BodyFooter from "./bodyFooter";
import EndFooter from "./endFooter";
import Line from "../../../components/line";
function footer() {
  return (
    <div className="bg-white w-full flex justify-center">
      <div className="w-[1440px] bg-slate-800 mb-6 rounded-2xl">
        <HeadFooter />
        <Line />
        <BodyFooter />
        <Line />
        <EndFooter />
      </div>
    </div>
  );
}

export default footer;
