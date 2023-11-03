import { useSelector } from "react-redux";
import TerminalNav from "./terminalNav/TerminalNav";

// TODO: See -> https://stackoverflow.com/questions/26233180/resize-a-div-on-border-drag-and-drop-without-adding-extra-markup
// https://codesandbox.io/s/react-resizable-sidebar-kz9de?file=/src/App.js
function Terminal() {
  const { terminalHeightInPercent, maximizeTerminal } = useSelector(
    (store) => store.mainScreen
  );
  const renderedTerminalHeight =
    (maximizeTerminal && 100) || terminalHeightInPercent;
  return (
    <div
      className={`border-top-darker w-full h-[${renderedTerminalHeight}%] background-dark z-10 absolute bottom-0`}
    >
      <TerminalNav />
    </div>
  );
}

export default Terminal;
