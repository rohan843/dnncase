import DCOptions from "./fileTypeSpecificOptions/DCOptions/DCOptions";
import { useSelector } from "react-redux";

function CurrentlyActiveOptions({ activeFileIndex }) {
  const activeFileType = useSelector(
    (store) => store.filesystem.fsState[activeFileIndex].data.filetype
  );
  return (
    <div className="h-full w-max flex items-center px-2">
      <DCOptions
        activeFileType={activeFileType}
        activeFileIndex={activeFileIndex}
      />
    </div>
  );
}

export default CurrentlyActiveOptions;
