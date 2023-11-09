import classNames from "classnames";
import removeIcon from "../../../../../../../../assets/remove-key.png";

function KeyValRow({ item, light }) {
  if (item.isValueEditable && !item.onValueChange) {
    console.warn(
      "KeyValRow: No value change handler provided on editable parameter."
    );
  }
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
          "relative w-[45%] self-stretch flex items-center justify-evenly break-all border-charcoal rounded px-1 overflow-hidden",
          backgroundColorClass
        )}
      >
        {!item.isValueEditable && (
          <div className="select-none h-min bg-black border-black text-white rounded-[1px] w-auto absolute -left-px -top-px px-[2px] text-[7px] font-semibold tracking-wide font-mono leading-[7px]">
            <span className="uppercase">R</span>
          </div>
        )}
        {!item.isValueEditable && item.valueInnerText}
        {item.isValueEditable && (
          <input
            type="text"
            id={item.keyInnerText}
            value={item.valueInnerText}
            onChange={item.onValueChange}
            placeholder="none"
            className="h-max w-full bg-transparent text-center"
            autoCapitalize="off"
            autoComplete="off"
            spellCheck={false}
            autoCorrect="off"
            autoFocus={false}
          />
        )}
      </div>
    </div>
  );
}

export default KeyValRow;
