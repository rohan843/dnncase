import checkedBoxImage from "../../../../../../../assets/checkbox-checked.png";
import uncheckedBoxImage from "../../../../../../../assets/checkbox-unchecked.png";

function TopOptionsBar({ options, optionsState, setOptionsState }) {
  if (options.length === 0) return null;
  const renderedOptions = options.map((option) => {
    return (
      <div className="w-full h-max flex flex-row" key={option.id}>
        <img
          src={
            (optionsState[option.id] && checkedBoxImage) || uncheckedBoxImage
          }
          onClick={() => {
            setOptionsState((state) => {
              state[option.id] = !state[option.id];
            });
          }}
          alt=""
          className="mr-1 h-4 mt-[0.25rem] opacity-50"
        />
        <label className="break-words hyphens">{option.label}</label>
      </div>
    );
  });
  return (
    <div className="flex flex-col items-center w-full min-h-7 max-h-32 px-2 py-1 border-bottom-darker rounded-b overflow-x-hidden overflow-y-scroll hide-scrollbar">
      {renderedOptions}
    </div>
  );
}

export default TopOptionsBar;
