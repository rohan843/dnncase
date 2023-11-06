import OptionButton from "./OptionButton";
import terminalImage from "../../assets/terminal.png";
import ToolTipWrapper from "../tooltipWrapper/ToolTipWrapper";

function SystemTerminalButton() {
  return (
    <ToolTipWrapper className="h-full" helpText="System<br />Terminal">
      <OptionButton active={false} onClick={() => {}}>
        <img className="h-full" src={terminalImage} alt="" />
      </OptionButton>
    </ToolTipWrapper>
  );
}

export default SystemTerminalButton;
