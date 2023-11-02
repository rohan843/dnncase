import refreshImage from "../../../../assets/refresh.png";
import ToolTipWrapper from "../../../tooltipWrapper/ToolTipWrapper";
import { ToolTipDelays } from "../../../../constants";

function RefreshButton() {
  return (
    <ToolTipWrapper
      className="h-full"
      helpText="Refresh Filesystem Data"
      customDelayMS={ToolTipDelays.large}
    >
      <div className="h-full py-2 px-1 opacity-50 hover:opacity-100 cursor-pointer">
        <img src={refreshImage} alt="" className="h-full" />
      </div>
    </ToolTipWrapper>
  );
}

export default RefreshButton;
