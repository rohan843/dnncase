import { useRef } from "react";
import useHorizontalScrolling from "../../../../hooks/useHorizontalScroll";

function QuickAddressBar({ addressList }) {
  const ref = useRef(null);
  const handleScroll = useHorizontalScrolling(ref);
  const addressComponents = addressList.map((addressComponent, idx) => {
    return (
      <span
        className="h-full w-max opacity-[0.65] hover:opacity-90 select-none cursor-pointer"
        onClick={addressComponent.onClick}
        key={idx}
        onWheel={handleScroll}
      >
        {addressComponent.name}
        {idx < addressList.length - 1 && (<span className="px-1">&gt;</span>)}
      </span>
    );
  });
  return (
    <div
      ref={ref}
      className="h-6 flex flex-row items-center pl-1 pr-5 w-full border-bottom-darker background-dark overflow-x-scroll overflow-y-hidden hide-scrollbar"
    >
      {addressComponents}
    </div>
  );
}
export default QuickAddressBar;
