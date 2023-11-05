import { useSelector } from "react-redux";
import HierarchicalMessageDisplay from "./HierarchicalMessageDisplay";
import ValidationMessageDisplay from "./ValidationMessageDisplay";
import {
  addExpandedValidationItem,
  removeExpandedValidationItem,
} from "../../../../store";

function ValidationTerminalContent() {
  const { messages, expandedItems } = useSelector(
    (store) => store.validationTerminal
  );
  return (
    <div className="w-full h-max">
      <HierarchicalMessageDisplay
        messages={messages}
        expandedItems={expandedItems}
        addExpandedItem={addExpandedValidationItem}
        removeExpandedItem={removeExpandedValidationItem}
        MessageDisplay={ValidationMessageDisplay}
      />
    </div>
  );
}

export default ValidationTerminalContent;
