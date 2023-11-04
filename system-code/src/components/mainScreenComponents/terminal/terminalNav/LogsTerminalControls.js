import FilterBox from "./FilterBox";
import ExportButton from "./ExportButton";
import { useDispatch, useSelector } from "react-redux";
import { setFilterString } from "../../../../store";

function LogsTerminalControls() {
  const dispatch = useDispatch();
  const { filterString } = useSelector((state) => state.logsTerminal);

  const handleFilterStringChange = (newFilterString) => {
    dispatch(setFilterString(newFilterString));
  };

  return (
    <div className="flex flex-row items-center">
      <FilterBox
        value={filterString}
        onValueChange={handleFilterStringChange}
      />
      <ExportButton />
    </div>
  );
}

export default LogsTerminalControls;
