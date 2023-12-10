import OptionsList from "./OptionsList";
import classNames from "classnames";

function LeftBar({ className }) {
  return (
    <div
      className={classNames(
        className,
        "border-left-dark border-right-darker p-px h-full background-dark overflow-y-auto hide-scrollbar"
      )}
    >
      <OptionsList />
    </div>
  );
}

export default LeftBar;
