import { useDispatch } from "react-redux";
import terminalMinimizeImage from "../../../../assets/terminal-minimize.png";
import { removeTerminal } from "../../../../store";

function MinimizeTerminalButton() {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(removeTerminal());
      }}
      className="h-3 opacity-60 hover:opacity-100 cursor-pointer px-2"
    >
      <img src={terminalMinimizeImage} alt="" className="h-full" />
    </div>
  );
}

export default MinimizeTerminalButton;
