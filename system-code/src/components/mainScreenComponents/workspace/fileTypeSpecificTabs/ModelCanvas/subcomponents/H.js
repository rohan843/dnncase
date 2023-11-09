import { useRef } from "react";
import useHorizontalScrolling from "../../../../../../hooks/useHorizontalScroll";
import classNames from "classnames";

/**
 * This is the 'heading' subcomponent. It can display headings at 3 different levels - 1, 2, and 3.
 */
function H({ config }) {
  const ref = useRef(null);
  const scrollHandler = useHorizontalScrolling(ref);
  if (!config.show) return null;
  return (
    <div
      ref={ref}
      onWheel={scrollHandler}
      className={classNames(
        "w-[95%] h-10 flex items-center mb-1 overflow-y-hidden overflow-x-scroll hide-scrollbar break-keep whitespace-nowrap select-none",
        {
          "text-2xl": config.level === 1,
          "text-xl": config.level === 2,
          "text-l": config.level === 3,
        }
      )}
    >
      {config.level === 1 && <span className="grow h-full"></span>}
      <span>{config.innerText}</span>
      {config.level === 1 && <span className="grow h-full"></span>}
    </div>
  );
}

export default H;
