import { useRef } from "react";
import { useSelector } from "react-redux";
import useHorizontalScrolling from "../../../../hooks/useHorizontalScroll";
import Tab from "./Tab Components/Tab";
import { getNameFromFileIndex } from "../../../../utils/getNameFromFileIndex";
import { cloneDeep } from "lodash";

function TabsList({ openFiles }) {
  const ref = useRef(null);
  const { fsState } = useSelector((state) => state.filesystem);
  const handleScroll = useHorizontalScrolling(ref);
  const tabsList = cloneDeep(openFiles)
    .sort((a, b) => a.firstOpenedAt - b.firstOpenedAt)
    .map((elt, idx) => {
      return (
        <Tab
          key={elt.fileIndex}
          name={getNameFromFileIndex(elt.fileIndex)}
          active={idx === 0}
          unsaved={fsState[elt.fileIndex].unsaved}
          // TODO: Add values for these props
          onClose={null}
          onClickToMakeActive={null}
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
