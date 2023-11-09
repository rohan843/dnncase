import OptionButton from "./OptionButton";
import pythonShellImage from "../../assets/python.png";
import ToolTipWrapper from "../tooltipWrapper/ToolTipWrapper";
import { useDispatch, useSelector } from "react-redux";
import {
  setTerminal,
  removeTerminal,
} from "../../store/slices/mainScreenSlice";
import { TerminalIDs } from "../../constants";

const id = TerminalIDs.pythonShell;

function PythonShellButton() {
  const dispatch = useDispatch();

  const { terminal } = useSelector((store) => {
    return store.mainScreen;
  });

  const isActive = terminal === id;
  return (
    <ToolTipWrapper className="h-full" helpText="Python<br />Shell">
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
        <img className="h-full" src={pythonShellImage} alt="" />
      </OptionButton>
    </ToolTipWrapper>
  );
}

export default PythonShellButton;
