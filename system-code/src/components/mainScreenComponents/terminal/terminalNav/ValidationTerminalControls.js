import { useDispatch, useSelector } from "react-redux";
import FilterBox from "./FilterBox";
import { setValidationFilterString } from "../../../../store";
import Checkbox from "./Checkbox";
import { toggleOnlyActiveFileMessages } from "../../../../store";

function ValidationTerminalControls() {
  const dispatch = useDispatch();
  const { filterString, onlyActiveFileMessages } = useSelector(
    (state) => state.validationTerminal
  );

  const handleFilterStringChange = (newFilterString) => {
    dispatch(setValidationFilterString(newFilterString));
  };

  return (
    <div className="flex flex-row items-center">
      <FilterBox
        value={filterString}
        onValueChange={handleFilterStringChange}
      />
      <Checkbox
        desc="Only show messages from active file."
        state={onlyActiveFileMessages}
        onStateToggle={() => {
          dispatch(toggleOnlyActiveFileMessages());
        }}
      />
    </div>
  );
}

export default ValidationTerminalControls;
