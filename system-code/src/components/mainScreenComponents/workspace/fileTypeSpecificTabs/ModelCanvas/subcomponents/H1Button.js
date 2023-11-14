import { useRef } from "react";
import useHorizontalScrolling from "../../../../../../hooks/useHorizontalScroll";

function H1Button({ show, onClick, innerText }) {
  const ref = useRef(null);
  const handleScroll = useHorizontalScrolling(ref);
  if (!show) return null;
  return (
    <div
      className="w-[95%] h-10 cursor-pointer select-none text-2xl tracking-wide border-darker background-dark hover-background-darker hover-border-black active-thin-inset-box-shadow flex items-center mb-2 flex items-center overflow-y-hidden overflow-x-scroll hide-scrollbar break-keep whitespace-nowrap"
      onClick={onClick}
      onWheel={handleScroll}
      ref={ref}
    >
      <span className="h-full grow"></span>
      <span className="px-1.5">{innerText}</span>
      <span className="h-full grow"></span>
    </div>
  );
}

export default H1Button;
