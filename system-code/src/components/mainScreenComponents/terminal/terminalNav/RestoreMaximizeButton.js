import classNames from "classnames";
import terminalMaximizeImage from "../../../../assets/terminal-maximize.png";
import { useDispatch, useSelector } from "react-redux";
import { maximizeTerminal, deMaximizeTerminal } from "../../../../store";

function RestoreMaximizeButton() {
  const dispatch = useDispatch();
  const { terminalHeightInPercent, isTerminalMaximized } = useSelector(
    (store) => store.mainScreen
  );
  return (
    <div
      className={classNames(
        "h-3 opacity-60 hover:opacity-100 cursor-pointer px-2",
        { "rotate-180": isTerminalMaximized || terminalHeightInPercent === 100 }
      )}
      onClick={() => {
        if (isTerminalMaximized) {
          dispatch(deMaximizeTerminal());
        } else {
          dispatch(maximizeTerminal());
        }
      }}
    >
      <img src={terminalMaximizeImage} alt="" className="h-full" />
    </div>
  );
}

export default RestoreMaximizeButton;
