import OptionButton from "./OptionButton";
import logImage from "../../assets/log.png";
import ToolTipWrapper from "../tooltipWrapper/ToolTipWrapper";

function LogsButton() {
  return (
    <ToolTipWrapper className="h-full" helpText="Logs">
      <OptionButton>
        <img className="h-full" src={logImage} alt="" />
      </OptionButton>
    </ToolTipWrapper>
  );
}

export default LogsButton;
