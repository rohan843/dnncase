import plusIcon from "../../../../../../../assets/plus.png";
import newWindowIcon from "../../../../../../../assets/open-in-new-window.png";
import classNames from "classnames";

/**
 * The toolbar that supports actions to data displayed as key-value pairs.
 * @param {Object} props
 * @param {Function} props.onAdd The action to do when the 'add' button is clicked.
 * @param {Function} props.onNewWindow The action to do when the 'open in new window' option is clicked.
 */
function TopToolbar({ onAdd, onNewWindow }) {
  return (
    <div className="flex flex-row items-center w-full h-7 border-bottom-darker rounded-b">
      <div
        className="w-5 h-5 cursor-pointer hover-background-dark rounded flex items-center justify-center hover-border-black mx-1 active-thin-inset-box-shadow"
        onClick={onAdd}
      >
        <img src={plusIcon} alt="" className="w-4 h-auto" />
      </div>
      <div className="grow" />
      <div
        className="w-5 h-5 cursor-pointer hover-background-dark rounded flex items-center justify-center hover-border-black mx-1 active-thin-inset-box-shadow"
        onClick={onNewWindow}
      >
        <img src={newWindowIcon} alt="" className="w-4 h-auto" />
      </div>
    </div>
  );
}

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

function KeyValue({ config }) {
  if (!config.show) return null;
  return (
    <div className="border-top-darker border-right-darker border-left-darker rounded h-max w-[95%] max-h-[400px] overflow-hidden flex flex-col items-center mb-1">
      <TopToolbar />
      <KeyValRows content={config.content} />
    </div>
  );
}

export default KeyValue;
