import OptionButton from "./OptionButton";
import citationsManagerImage from "../../assets/citations.png";
import ToolTipWrapper from "../tooltipWrapper/ToolTipWrapper";

function CitationsManagerButton() {
  return (
    <ToolTipWrapper className="h-full" helpText="Citations<br />Manager">
      <OptionButton active={false} onClick={() => {}}>
        <img className="h-full" src={citationsManagerImage} alt="" />
      </OptionButton>
    </ToolTipWrapper>
  );
}

export default CitationsManagerButton;
