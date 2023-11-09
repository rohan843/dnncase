import HierarchicalDisplay from "./HierarchicalDisplay";
import TopToolbar from "./TopToolbar";

function HierarchicalElementSelector({ config }) {
  if (!config.show) return false;
  return (
    <div className="border-top-darker border-right-darker border-left-darker rounded w-[95%] h-max mb-1">
      <TopToolbar />
      <HierarchicalDisplay />
    </div>
  );
}

export default HierarchicalElementSelector;
