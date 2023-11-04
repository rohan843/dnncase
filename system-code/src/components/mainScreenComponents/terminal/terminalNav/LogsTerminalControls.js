import FilterBox from "./FilterBox";
import ExportButton from "./ExportButton";

function LogsTerminalControls() {
  return (
    <div className="flex flex-row items-center">
      <FilterBox />
      <ExportButton />
    </div>
  );
}

export default LogsTerminalControls;
