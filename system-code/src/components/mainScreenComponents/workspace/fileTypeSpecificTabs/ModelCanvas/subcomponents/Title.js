import { useRef } from "react";
import useHorizontalScrolling from "../../../../../../hooks/useHorizontalScroll";

/**
 * A component to display a title.
 * @param {Object} param0
 * @param {boolean} param0.show If true, the component will return JSX, else it will return `null`.
 * @param {string} param0.innerText The title to display. Text is not auto-capitalized.
 */
function Title({ show, innerText }) {
  const ref = useRef(null);
  const scrollHandler = useHorizontalScrolling(ref);
  if (!show) return null;
  return (
    <div
      ref={ref}
      className="border-darker w-[90%] h-12 background-dark flex items-center text-3xl font-mono mb-2 overflow-y-hidden overflow-x-scroll hide-scrollbar break-keep whitespace-nowrap"
      onWheel={scrollHandler}
    >
      <span className="h-full grow"></span>
      <span className="px-1.5">{innerText}</span>
      <span className="h-full grow"></span>
    </div>
  );
}

export default Title;
