import collapseImage from "../../../../assets/collapse.png";
import ToolTipWrapper from "../../../tooltipWrapper/ToolTipWrapper";

function CollapseAllButton() {
  return (
    <ToolTipWrapper className="h-full" helpText="Collapse All Folders">
      <div className="h-full py-2 px-1 opacity-50 hover:opacity-100 cursor-pointer">
        <img src={collapseImage} alt="" className="h-full" />
      </div>
    </ToolTipWrapper>
  );
}

export default CollapseAllButton;
