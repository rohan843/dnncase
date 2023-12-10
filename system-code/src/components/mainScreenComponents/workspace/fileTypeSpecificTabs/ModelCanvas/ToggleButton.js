import classNames from "classnames";
import paneToggleLeft from "../../../../../assets/pane-toggle-left.png";

function ToggleButton({ pointLeft, className, onClick }) {
  return (
    <div
      className={classNames(
        "select-none border-black flex items-center justify-center w-5 h-5 rounded-full cursor-pointer background-dark hover-background-darker",
        className
      )}
      onClick={onClick}
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
