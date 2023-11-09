import HierarchicalDisplay from "./HierarchicalDisplay";
import TopOptionsBar from "./TopOptionsBar";
import { useImmer } from "use-immer";

function HierarchicalElementSelector({ config }) {
  const initialOptionsState = {};
  for (let i = 0; i < config.options.length; i++) {
    initialOptionsState[config.options[i].id] = false;
  }

  const [optionsState, setOptionsState] = useImmer(initialOptionsState);

  if (!config.show) return false;
  return (
    <div className="border-top-darker border-right-darker border-left-darker rounded w-[95%] h-max mb-1">
      <TopOptionsBar
        options={config.options}
        optionsState={optionsState}
        setOptionsState={setOptionsState}
      />
      <HierarchicalDisplay
        onSelect={(elementID) => {
          config.onSelect(elementID, optionsState);
        }}
        items={config.contents}
      />
    </div>
  );
}

export default HierarchicalElementSelector;
