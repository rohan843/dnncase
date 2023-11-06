import DCOptions from "./fileTypeSpecificOptions/DCOptions/DCOptions";

function CurrentlyActiveOptions() {
  return (
    <div className="h-full w-max flex items-center px-2">
      <DCOptions />
    </div>
  );
}

export default CurrentlyActiveOptions;
