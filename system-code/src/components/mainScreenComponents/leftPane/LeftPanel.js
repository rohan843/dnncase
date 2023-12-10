import { useSelector } from "react-redux";
import LeftbarView from "./LeftbarView";
import classNames from "classnames";
import useActivatableEntity from "../../../hooks/useActivatableEntity";
import { MajorEntityIDs } from "../../../constants";

// This component serves as a resizable parent component.
function LeftPanel({ className }) {
  const { leftPane } = useSelector((state) => state.mainScreen);
  const handleClickCapture = useActivatableEntity(MajorEntityIDs.leftPane);
  return (
    <div
      className={classNames(
        "border-right-darker h-full background-light",
        className
      )}
      onClickCapture={handleClickCapture}
    >
      <LeftbarView viewType={leftPane} />
    </div>
  );
}

export default LeftPanel;
