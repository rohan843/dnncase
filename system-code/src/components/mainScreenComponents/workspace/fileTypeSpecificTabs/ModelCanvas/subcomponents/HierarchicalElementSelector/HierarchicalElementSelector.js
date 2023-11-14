import HierarchicalDisplay from "./HierarchicalDisplay";
import TopOptionsBar from "./TopOptionsBar";
import { useImmer } from "use-immer";
import { cloneDeep } from "lodash";

function HierarchicalElementSelector({ options, show, onSelect, contents }) {
  const initialOptionsState = {};
  for (let i = 0; i < options.length; i++) {
    initialOptionsState[options[i].id] = false;
  }

  const [optionsState, setOptionsState] = useImmer(initialOptionsState);

  if (!show) return false;
  return (
    <div className="border-top-darker border-right-darker border-left-darker rounded w-[95%] h-max mb-1">
      <TopOptionsBar
        options={options}
        optionsState={optionsState}
        setOptionsState={setOptionsState}
      />
      <HierarchicalDisplay
        onSelect={(elementID) => {
          onSelect(elementID, cloneDeep(optionsState));
        }}
        items={contents}
      />
    </div>
  );
}

export default HierarchicalElementSelector;
