import classNames from "classnames";
import mdIcon from "../../../../../../../assets/md.png";
import ToolTipWrapper from "../../../../../../tooltipWrapper/ToolTipWrapper";

function MarkdownButtons({ enabled, className, onClick }) {
  return (
    <ToolTipWrapper
      helpText={
        (enabled && "Convert to<br />plaintext") || "Convert to<br />markdown"
      }
      className={classNames(
        "select-none w-max h-max cursor-pointer",
        { "opacity-50 hover:opacity-100": !enabled },
        className
      )}
    >
      <div
        className="w-max h-max cursor-pointer"
        onClick={onClick}
      >
        <img src={mdIcon} alt="" className="w-5 h-auto" />
      </div>
    </ToolTipWrapper>
  );
}

export default MarkdownButtons;
