import classNames from "classnames";
import removeIcon from "../../../../../../../../assets/remove-key.png";

function KeyValRow({ item, light }) {
  const backgroundColorClass = light
    ? "background-lightest"
    : "background-slightly-dark";
  return (
    <div className="min-h-[2rem] flex flex-row items-center justify-evenly my-1 font-mono">
      {/* Key */}
      <div
        className={classNames(
          "w-[45%] self-stretch flex items-center justify-evenly break-all border-charcoal rounded px-1 py-2 relative overflow-hidden",
          backgroundColorClass
        )}
      >
        {item.removable && (
          <div
            className="h-2.5 border-black hover-background-dark cursor-pointer active-thin-inset-box-shadow rounded-[1px] w-auto absolute -left-px -top-px"
            onClick={item.onRemove}
          >
            <img src={removeIcon} alt="" className="h-full w-auto" />
          </div>
        )}

        {item.keyInnerText}
      </div>
      {/* Value */}
      <div
        className={classNames(
          "w-[45%] self-stretch flex items-center justify-evenly break-all border-charcoal rounded px-1",
          backgroundColorClass
        )}
      >
        {item.valueInnerText}
      </div>
    </div>
  );
}

export default KeyValRow;
