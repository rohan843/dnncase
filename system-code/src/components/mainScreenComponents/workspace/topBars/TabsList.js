import { useRef } from "react";
import useHorizontalScrolling from "../../../../hooks/useHorizontalScroll";
import Tab from "./Tab Components/Tab";
import { getNameFromFileIndex } from "../../../../utils/getNameFromFileIndex";

function TabsList({ openFiles }) {
  const ref = useRef(null);
  const handleScroll = useHorizontalScrolling(ref);
  const tabsList = openFiles.map((elt, idx) => {
    return (
      <Tab
        key={elt.fileIndex}
        name={getNameFromFileIndex(elt.fileIndex)}
        active={idx === 0}
        // TODO: Add values for these props
        unsaved
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
