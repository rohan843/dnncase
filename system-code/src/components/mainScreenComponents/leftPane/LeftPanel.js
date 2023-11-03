import { useSelector } from "react-redux";
import LeftbarView from "./LeftbarView";
import classNames from "classnames";

// This component serves as a resizable parent component.
function LeftPanel({ className }) {
  const { leftPane } = useSelector((state) => state.mainScreen);
  return (
    <div
      className={classNames(
        "border-right-darker h-full background-light",
        className
      )}
    >
      <LeftbarView viewType={leftPane} />
    </div>
  );
}

export default LeftPanel;
