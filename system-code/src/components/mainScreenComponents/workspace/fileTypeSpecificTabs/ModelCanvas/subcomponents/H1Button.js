import { useRef } from "react";
import useHorizontalScrolling from "../../../../../../hooks/useHorizontalScroll";

/**
 * A component to display a heading (level 1) that is also a button.
 * @param {Object} param0
 * @param {boolean} param0.show If true, the component will return JSX, else it will return `null`.
 * @param {Function} param0.onClick This function is triggered when the button is clicked.
 * @param {string} param0.innerText The text to display within the button.
 */
function H1Button({ show, onClick, innerText }) {
  const ref = useRef(null);
  const handleScroll = useHorizontalScrolling(ref);
  if (!show) return null;
  return (
    <div
      className="w-[95%] h-10 cursor-pointer select-none text-2xl tracking-wide border-darker background-dark hover-background-darker hover-border-black active-thin-inset-box-shadow mb-2 flex items-center overflow-y-hidden overflow-x-scroll hide-scrollbar break-keep whitespace-nowrap"
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
