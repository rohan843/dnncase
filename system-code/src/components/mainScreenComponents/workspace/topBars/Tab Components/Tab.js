import classNames from "classnames";
import CloseButton from "./CloseButton";
import FileName from "./FileName";
import UnsavedFlag from "./UnsavedFlag";

function Tab({
  active,
  name,
  unsaved,
  onClose,
  onClickToMakeActive,
  fullPathToFile,
}) {
  return (
    <div
      className={classNames(
        "h-full w-max pl-1 flex items-center justify-between border-right-darker background-light cursor-pointer",
        {
          "background-dark": active,
          "hover-background-dark": !active,
        }
      )}
      onClick={onClickToMakeActive}
    >
      <FileName name={name} title={fullPathToFile} />
      <div className="h-max w-max flex flex-row items-center px-1">
        <UnsavedFlag show={unsaved} />
        <CloseButton onClick={onClose} />
      </div>
    </div>
  );
}

export default Tab;
