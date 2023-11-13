import { useRef } from "react";
import useHorizontalScrolling from "../../../../hooks/useHorizontalScroll";

/**
 * Takes in a file index and returns a list of all the file's parent folders in order, along with
 * their indices.
 * @param {string} fileIndex The index of the file (should be of exactly the proper format).
 *
 * @returns {Array<{name: string, fileIndex: string}>} The list of all parents' names and fileIndices sorted from outermost to
 * innermost.
 */
function getAddressListFromFileIndex(fileIndex) {
  const parentDirs = fileIndex.split("/");
  parentDirs.splice(0, 1);
  let curPath = "";
  const res = [];
  for (let parent of parentDirs) {
    curPath += `/${parent}`;
    res.push({
      name: parent,
      fileIndex: curPath,
    });
  }
  return res;
}

function QuickAddressBar({ activeFileIndex }) {
  const ref = useRef(null);
  const handleScroll = useHorizontalScrolling(ref);
  const addressList = getAddressListFromFileIndex(activeFileIndex);
  const addressComponents = addressList.map((addressComponent, idx) => {
    return (
      <span
        className="h-full w-max opacity-[0.65] hover:opacity-90 select-none cursor-pointer"
        // TODO: Add a click handler.
        onClick={addressComponent.onClick}
        key={idx}
        title={addressComponent.fileIndex}
      >
        {addressComponent.name}
        {idx < addressList.length - 1 && <span className="px-1">&gt;</span>}
      </span>
    );
  });
  return (
    <div
      ref={ref}
      onWheel={handleScroll}
      className="w-full h-[1.5rem] flex flex-row items-center pl-1 pr-5 border-bottom-darker background-dark overflow-x-scroll overflow-y-hidden hide-scrollbar whitespace-nowrap"
    >
      {addressComponents}
    </div>
  );
}
export default QuickAddressBar;
