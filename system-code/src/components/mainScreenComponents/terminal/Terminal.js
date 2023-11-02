import { useState } from "react";

// TODO: See -> https://stackoverflow.com/questions/26233180/resize-a-div-on-border-drag-and-drop-without-adding-extra-markup
// https://codesandbox.io/s/react-resizable-sidebar-kz9de?file=/src/App.js
function Terminal() {
  const [height, setHeight] = useState(300);
  return (
    <div
      className="border-top-darker w-full background-dark z-10 absolute bottom-0"
      style={{ height: `${height}px` }}
    >
      <div
        className="w-full h-[2px] -top-[1px] relative cursor-row-resize z-10"
        onDrag={(e) => {
          console.log(e.nativeEvent.offsetY);
          // setHeight(height + -1 * e.nativeEvent.offsetY);
        }}
        draggable="true"
      />
      Terminal
    </div>
  );
}

export default Terminal;
