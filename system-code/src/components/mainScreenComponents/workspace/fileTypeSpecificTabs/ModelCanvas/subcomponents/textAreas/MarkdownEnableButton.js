import classNames from "classnames";
import mdIcon from "../../../../../../../assets/md.png";

function MarkdownEnableButton({ enabled, className, onClick }) {
  return (
    <div
      className={classNames(
        "select-none w-max h-max cursor-pointer",
        { "opacity-50 hover:opacity-100": !enabled },
        className
      )}
      onClick={onClick}
    >
      <img src={mdIcon} alt="" className="w-5 h-auto" />
    </div>
  );
}

export default MarkdownEnableButton;
