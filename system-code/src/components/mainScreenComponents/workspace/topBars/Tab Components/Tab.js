import classNames from "classnames";
import CloseButton from "./CloseButton";
import FileName from "./FileName";
import UnsavedFlag from "./UnsavedFlag";

function Tab({ active }) {
  return (
    <div
      //   style={active && { boxShadow: "2px -2px 11px -1px rgba(0,0,0,0.59)" }}
      className={classNames(
        "h-full w-max min-w-[6rem] pl-1 flex items-center justify-between border-right-darker background-light cursor-pointer",
        {
          "background-dark": active,
          "hover-background-dark": !active,
        }
      )}
    >
      <FileName name="Tab" />
      <div className="flex flex-row items-center px-1">
        <UnsavedFlag show={true} />
        <CloseButton />
      </div>
    </div>
  );
}

export default Tab;
