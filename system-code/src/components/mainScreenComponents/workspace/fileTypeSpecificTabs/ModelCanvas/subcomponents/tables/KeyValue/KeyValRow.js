import classNames from "classnames";

function KeyValRow({ item, light }) {
  const backgroundColorClass = light
    ? "background-lightest"
    : "background-slightly-dark";
  return (
    <div className="min-h-[2rem] flex flex-row items-center justify-evenly my-1 font-mono">
      <div
        className={classNames(
          "w-[45%] self-stretch flex items-center justify-evenly break-all border-charcoal rounded px-1",
          backgroundColorClass
        )}
      >
        {item.keyInnerText}
      </div>
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
