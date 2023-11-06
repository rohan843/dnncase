import OptionButton from "./OptionButton";
import pythonShellImage from "../../assets/python.png";
import ToolTipWrapper from "../tooltipWrapper/ToolTipWrapper";

function PythonShellButton() {
  return (
    <ToolTipWrapper className="h-full" helpText="Python<br />Shell">
      <OptionButton active={false} onClick={() => {}}>
        <img className="h-full" src={pythonShellImage} alt="" />
      </OptionButton>
    </ToolTipWrapper>
  );
}

export default PythonShellButton;
