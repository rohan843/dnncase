import { useRef } from "react";
import useHorizontalScrolling from "../../../../hooks/useHorizontalScroll";
import Tab from "./Tab Components/Tab";

function TabsList() {
  const ref = useRef(null);
  const handleScroll = useHorizontalScrolling(ref);
  return (
    <div
      className="h-full w-max min-w-[10%] grow select-none overflow-x-scroll overflow-y-clip hide-scrollbar flex flex-row items-center"
      onWheel={handleScroll}
      ref={ref}
    >
      <Tab name="file1.dnnconf" />
      <Tab name="file2.dnnconf" active />
      <Tab name="file3.dnnconf" unsaved />
      <Tab name="file4.dnnconf" />
      <Tab name="file5.dnnconf" unsaved />
      <Tab name="file6.dnnconf" />
      <Tab name="file7.dnnconf" />
      <Tab name="file7.dnnconf" />
      <Tab name="file7.dnnconf" />
      <Tab name="file7.dnnconf" />
      <Tab name="file7.dnnconf" />
    </div>
  );
}

export default TabsList;
