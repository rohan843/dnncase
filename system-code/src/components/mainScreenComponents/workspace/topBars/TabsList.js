import { useRef } from "react";
import useHorizontalScrolling from "../../../../hooks/useHorizontalScroll";

function TabsList() {
  const ref = useRef(null);
  const handleScroll = useHorizontalScrolling(ref);
  return (
    <div
      className="h-full min-w-[10%] border grow select-none overflow-x-scroll overflow-y-clip hide-scrollbar flex flex-row items-center"
      onWheel={handleScroll}
      ref={ref}
    >
      
    </div>
  );
}

export default TabsList;
