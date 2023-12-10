import { MajorEntityIDs } from "../../../constants";
import useActivatableEntity from "../../../hooks/useActivatableEntity";
import TabInnerContent from "./TabInnerContent";
import QuickAddressBar from "./topBars/QuickAddressBar";
import TopTabBar from "./topBars/TopTabBar";
import { useSelector } from "react-redux";

function Workspace() {
  const { openFiles } = useSelector((state) => state.filesystem);
  const handleClickCapture = useActivatableEntity(MajorEntityIDs.workspace);
  return (
    openFiles.length > 0 && (
      <div
        className="w-full h-full z-0 flex flex-col"
        onClickCapture={handleClickCapture}
      >
        <TopTabBar openFiles={openFiles} />
        <QuickAddressBar activeFileIndex={openFiles[0].fileIndex} />
        <TabInnerContent activeFileIndex={openFiles[0].fileIndex} />
      </div>
    )
  );
}

export default Workspace;
