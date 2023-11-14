import classNames from "classnames";
import mdIcon from "../../../../../../../assets/md.png";
import editIcon from "../../../../../../../assets/edit-button.png";
import ToolTipWrapper from "../../../../../../tooltipWrapper/ToolTipWrapper";

function MarkdownButtons({
  enabled,
  editsEnabled,
  onEditsToggle,
  className,
  onClick,
}) {
  return (
    <div className={classNames("flex flex-row items-center", className)}>
      {enabled && (
        <ToolTipWrapper
          helpText={(editsEnabled && "View") || "Edit"}
          className={classNames("select-none w-max h-max cursor-pointer mr-1", {
            "opacity-50 hover:opacity-100": !editsEnabled,
          })}
        >
          <div className="w-max h-max cursor-pointer" onClick={onEditsToggle}>
            <img src={editIcon} alt="" className="w-[26px] h-auto" />
          </div>
        </ToolTipWrapper>
      )}
      <ToolTipWrapper
        helpText={
          (enabled && "Convert to<br />plaintext") || "Convert to<br />markdown"
        }
        className={classNames("select-none w-max h-max cursor-pointer", {
          "opacity-50 hover:opacity-100": !enabled,
        })}
      >
        <div className="w-max h-max cursor-pointer" onClick={onClick}>
          <img src={mdIcon} alt="" className="w-5 h-auto" />
        </div>
      </ToolTipWrapper>
    </div>
  );
}

export default MarkdownButtons;
