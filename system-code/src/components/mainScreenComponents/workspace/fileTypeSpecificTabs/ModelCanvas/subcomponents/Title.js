import { useRef } from "react";
import useHorizontalScrolling from "../../../../../../hooks/useHorizontalScroll";

function Title({ config }) {
  const ref = useRef(null);
  const scrollHandler = useHorizontalScrolling(ref);
  if (!config.show) return null;
  return (
    <div
      ref={ref}
      className="border-darker w-[90%] h-12 background-dark flex items-center text-3xl font-mono mb-2 overflow-y-hidden overflow-x-scroll hide-scrollbar break-keep whitespace-nowrap"
      onWheel={scrollHandler}
    >
      <span className="h-full grow"></span>
      <span className="px-1.5">{config.innerText}</span>
      <span className="h-full grow"></span>
    </div>
  );
}

export default Title;
