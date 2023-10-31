import OptionButton from "./OptionButton";
import logImage from "../../assets/log.png";
import ToolTipWrapper from "../tooltipWrapper/ToolTipWrapper";
import HelpTooltip from "../tooltipWrapper/HelpTooltip";

function LogsButton() {
  return (
    <OptionButton>
      <HelpTooltip className="h-full" helpText="Logs">
        <img className="h-full" src={logImage} alt="" />
      </HelpTooltip>
    </OptionButton>
  );
}

export default LogsButton;
