import OptionButton from "./OptionButton";
import terminalImage from "../../assets/terminal.png";
import ToolTipWrapper from "../tooltipWrapper/ToolTipWrapper";
import { useDispatch, useSelector } from "react-redux";
import {
  setTerminal,
  removeTerminal,
} from "../../store/slices/mainScreenSlice";
import { TerminalIDs } from "../../constants";

const id = TerminalIDs.systemTerminal;

function SystemTerminalButton() {
  const dispatch = useDispatch();

  const { terminal } = useSelector((store) => {
    return store.mainScreen;
  });

  const isActive = terminal === id;
  return (
    <ToolTipWrapper className="h-full" helpText="System<br />Terminal">
      <OptionButton
        active={isActive}
        onClick={() => {
          if (isActive) {
            dispatch(removeTerminal());
          } else {
            dispatch(setTerminal(id));
          }
        }}
      >
        <img className="h-full" src={terminalImage} alt="" />
      </OptionButton>
    </ToolTipWrapper>
  );
}

export default SystemTerminalButton;
