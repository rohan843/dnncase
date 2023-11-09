import classNames from "classnames";
import ToggleButton from "./ToggleButton";
import ConfigBasedSubcomponentDisplay from "./ConfigBasedSubcomponentDisplay";

function LeftPane({ open, onOpen, onClose, config }) {
  return (
    (open && (
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
            onClick={onClose}
          />
          <ConfigBasedSubcomponentDisplay config={config} />
        </div>
      </div>
    )) || (
      <ToggleButton
        pointLeft={false}
        className="absolute top-2 left-2"
        onClick={onOpen}
      />
    )
  );
}

export default LeftPane;
