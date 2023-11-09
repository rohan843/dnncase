import classNames from "classnames";

function KeyValRows({ content }) {
  if (!content || content.length === 0) return null;
  const contentJSX = content.map((item, idx) => {
    const backgroundColorClass =
      idx % 2 === 0 ? "background-lightest" : "background-slightly-dark";
    return (
      <div
        key={item.keyInnerText}
        className="min-h-[2rem] flex flex-row items-center justify-evenly my-1 font-mono"
      >
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
  });
  return (
    <div className="w-full h-max border-bottom-darker rounded-b overflow-y-scroll hide-scrollbar">
      {contentJSX}
    </div>
  );
}

export default KeyValRows;
