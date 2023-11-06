import { useRef } from "react";

function TabsList() {
  const ref = useRef(null);
  const handleScroll = (event) => {
    const container = ref.current;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount * 1.3,
      behavior: "instant",
    });
  };
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
