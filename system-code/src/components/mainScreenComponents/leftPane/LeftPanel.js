import LeftbarView from "./LeftbarView";
import classNames from "classnames";

// This component serves as a resizable parent component.
function LeftPanel({ className }) {
  return (
    <div
      className={classNames(
        "border-right-darker h-full background-light",
        className
      )}
    >
      <LeftbarView viewType="fs" />
    </div>
  );
}

export default LeftPanel;
