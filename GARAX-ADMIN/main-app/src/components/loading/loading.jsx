import "./loading.module.css";
import { cn } from "../../lib/utils.js";

function loading() {
  return (
    <>
      <div
        aria-label="Orange and tan hamster running in a metal wheel"
        role="img"
        className={cn(
          "relative w-[12em] h-[12em] text-xs",
          "wheel-and-hamster"
        )}
      >
        <div className={cn("", "wheel")}></div>
        <div className={cn("", "hamster")}>
          <div className={cn("", "hamster__body")}>
            <div className={cn("", "hamster__head")}>
              <div className="hamster__ear"></div>
              <div className="hamster__eye"></div>
              <div className="hamster__nose"></div>
            </div>
            <div className="hamster__limb hamster__limb--fr"></div>
            <div className="hamster__limb hamster__limb--fl"></div>
            <div className="hamster__limb hamster__limb--br"></div>
            <div className="hamster__limb hamster__limb--bl"></div>
            <div className="hamster__tail"></div>
          </div>
        </div>
        <div className="spoke"></div>
      </div>
    </>
  );
}

export default loading;
