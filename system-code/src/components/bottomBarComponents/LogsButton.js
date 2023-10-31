import OptionButton from "./OptionButton";
import logImage from "../../assets/log.png";
import ToolTipWrapper from "../tooltipWrapper/ToolTipWrapper";

function LogsButton() {
  return (
    <OptionButton>
      <ToolTipWrapper className="h-full" helpText="Logs">
        <img className="h-full" src={logImage} alt="" />
      </ToolTipWrapper>
    </OptionButton>
  );
}

export default LogsButton;
