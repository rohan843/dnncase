import HierarchicalDisplay from "./HierarchicalDisplay";
import TopOptionsBar from "./TopOptionsBar";
import { useImmer } from "use-immer";
import { cloneDeep } from "lodash";

/**
 * A component to display hierarchically arranged item.
 * @param {Object} param0
 * @param {[{
 * id: string,
 * label: string,
 * }]} param0.options A list of boolean options to be shown as checkboxes.
 * @param {boolean} param0.show If true, the component will return JSX, else it will return `null`.
 * @param {(elementID: string, options: { optionID: boolean }) => void} param0.onSelect This
 * function will be called when an item is selected. It will be passed the ID (index) of the item
 * along with an object containing the ids of various options in it, describing what options user
 * chose.
 * @param {[{
 * index: string,
 * isFolder: boolean,
 * children: string[],
 * data: { name: string }
 * }]} param0.contents The actual options to display. (_ref. react-complex-tree items format_.)
 */
function HierarchicalElementSelector({ options, show, onSelect, contents }) {
  const initialOptionsState = {};
  for (let i = 0; i < options.length; i++) {
    initialOptionsState[options[i].id] = false;
  }

  const [optionsState, setOptionsState] = useImmer(initialOptionsState);

  if (!show) return null;
  return (
    <div className="border-top-darker border-right-darker border-left-darker rounded w-[95%] h-max mb-1">
      {/* <TopOptionsBar
        options={options}
        optionsState={optionsState}
        setOptionsState={setOptionsState}
      /> */}
      <HierarchicalDisplay
        onSelect={(elementID) => {
          onSelect(elementID, cloneDeep(optionsState));
          setOptionsState((prevState) => {
            for (let key of Object.keys(prevState)) {
              prevState[key] = false;
            }
          });
        }}
        items={contents}
      />
    </div>
  );
}

export default HierarchicalElementSelector;
