import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import useHorizontalScrolling from "../../../../hooks/useHorizontalScroll";
import Tab from "./Tab Components/Tab";
import { getNameFromFileIndex } from "../../../../utils/getNameFromFileIndex";
import { cloneDeep } from "lodash";
import { removeOpenFile, setActiveFile } from "../../../../store";

function TabsList({ openFiles }) {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { fsState } = useSelector((state) => state.filesystem);
  const handleScroll = useHorizontalScrolling(ref);
  const tabsList = cloneDeep(openFiles)
    .map((elt, idx) => {
      elt.origArrayIdx = idx;
      return elt;
    })
    .sort((a, b) => a.firstOpenedAt - b.firstOpenedAt)
    .map((elt) => {
      return (
        <Tab
          key={elt.fileIndex}
          name={getNameFromFileIndex(elt.fileIndex)}
          active={elt.origArrayIdx === 0}
          unsaved={fsState[elt.fileIndex].unsaved}
          onClose={() => {
            dispatch(removeOpenFile(elt.fileIndex));
          }}
          onClickToMakeActive={() => {
            dispatch(setActiveFile(elt.fileIndex));
          }}
          fullPathToFile={elt.fileIndex}
        />
      );
    });
  return (
    <div
      className="h-full w-max min-w-[10%] grow select-none overflow-x-scroll overflow-y-clip hide-scrollbar flex flex-row items-center"
      onWheel={handleScroll}
      ref={ref}
    >
      {tabsList}
    </div>
  );
}

export default TabsList;
