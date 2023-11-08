import classNames from "classnames";
import ToggleButton from "./ToggleButton";

function LeftPane() {
  return (
    <div
      className={classNames(
        "w-[400px] h-[95%]",
        "absolute left-0 top-0 bottom-0 my-auto",
        "rounded-r-lg",
        "thin-box-shadow-right",
        "border-bottom-darker border-top-darker border-right-darker",
        "background-light",
        "pr-1 pt-1 pb-1"
      )}
    >
      <div
        className={classNames(
          "w-full h-full",
          "overflow-x-clip overflow-y-scroll",
          "p-1",
          "stable-scrollbar-gutter style-scrollbar-slightly-rounded"
        )}
      >
        <ToggleButton
          pointLeft={true}
          className="absolute -right-2.5 bottom-[5%]"
        />
      </div>
    </div>
  );
}

export default LeftPane;
