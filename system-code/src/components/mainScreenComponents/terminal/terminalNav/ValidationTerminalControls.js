import { useDispatch, useSelector } from "react-redux";
import FilterBox from "./FilterBox";
import { setValidationFilterString } from "../../../../store";

function ValidationTerminalControls() {
  const dispatch = useDispatch();
  const { filterString } = useSelector((state) => state.validationTerminal);

  const handleFilterStringChange = (newFilterString) => {
    dispatch(setValidationFilterString(newFilterString));
  };

  return (
    <div className="flex flex-row items-center">
      <FilterBox
        value={filterString}
        onValueChange={handleFilterStringChange}
      />
    </div>
  );
}

export default ValidationTerminalControls;
