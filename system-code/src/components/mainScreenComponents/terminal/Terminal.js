import { useSelector } from "react-redux";
import TerminalNav from "./terminalNav/TerminalNav";
import TerminalContent from "./terminalContents/TerminalContent";

// TODO: See -> https://stackoverflow.com/questions/26233180/resize-a-div-on-border-drag-and-drop-without-adding-extra-markup
// https://codesandbox.io/s/react-resizable-sidebar-kz9de?file=/src/App.js
function Terminal() {
  const { terminalHeightInPercent, isTerminalMaximized } = useSelector(
    (store) => store.mainScreen
  );
  const renderedTerminalHeightInPercent =
    (isTerminalMaximized && 100) || terminalHeightInPercent;
  return (
    <div
      style={{ height: `${renderedTerminalHeightInPercent}%` }}
      className={`flex flex-col border-top-darker w-full background-dark z-10 absolute bottom-0`}
    >
      <TerminalNav />
      <TerminalContent />
    </div>
  );
}

export default Terminal;
