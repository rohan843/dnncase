import { useRef } from "react";
import useHorizontalScrolling from "../../../../hooks/useHorizontalScroll";
import Tab from "./Tab Components/Tab";

function TabsList() {
  const ref = useRef(null);
  const handleScroll = useHorizontalScrolling(ref);
  return (
    <div
      className="h-full min-w-[10%] grow select-none overflow-x-scroll overflow-y-clip hide-scrollbar flex flex-row items-center"
      onWheel={handleScroll}
      ref={ref}
    >
      <Tab />
      <Tab active />
    </div>
  );
}

export default TabsList;
