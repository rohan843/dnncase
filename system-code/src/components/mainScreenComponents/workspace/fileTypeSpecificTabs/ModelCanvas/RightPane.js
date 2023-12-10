import classNames from "classnames";
import ToggleButton from "./ToggleButton";
import SubcomponentDisplay from "./SubcomponentDisplay";

function RightPane({ open, onOpen, onClose, children }) {
  return (
    (open && (
      <div
        className={classNames(
          "w-[400px] h-[95%]",
          "absolute right-0 top-0 bottom-0 my-auto",
          "rounded-l-lg",
          "thin-box-shadow-left",
          "border-bottom-darker border-top-darker border-left-darker",
          "background-light",
          "pl-1 pt-1 pb-1"
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
            pointLeft={false}
            className="absolute -left-2.5 bottom-[5%]"
            onClick={onClose}
          />
          <SubcomponentDisplay>
            {children}
          </SubcomponentDisplay>
        </div>
      </div>
    )) || (
      <ToggleButton
        pointLeft={true}
        className="absolute top-2 right-2"
        onClick={onOpen}
      />
    )
  );
}

export default RightPane;
