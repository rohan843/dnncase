import OptionButton from "./OptionButton";
import helperImage from "../../assets/helper.png";
import ToolTipWrapper from "../tooltipWrapper/ToolTipWrapper";

function HelperButton() {
  return (
    <ToolTipWrapper className="h-full" helpText="Helper">
      <OptionButton active={false} onClick={() => {}}>
        <img className="h-full" src={helperImage} alt="" />
      </OptionButton>
    </ToolTipWrapper>
  );
}

export default HelperButton;
