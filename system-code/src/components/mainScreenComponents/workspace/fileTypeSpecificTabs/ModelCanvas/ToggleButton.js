import classNames from "classnames";
import paneToggleLeft from "../../../../../assets/pane-toggle-left.png";

function ToggleButton({ pointLeft, className }) {
  return (
    <div
      className={classNames(
        "border-black flex items-center justify-center w-5 h-5 rounded-full",
        className
      )}
    >
      <img
        src={paneToggleLeft}
        alt=""
        className={classNames("relative w-[60%] h-[60%]", {
          "-left-px": pointLeft,
          "rotate-180": !pointLeft,
        })}
      />
    </div>
  );
}

export default ToggleButton;
