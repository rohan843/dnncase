import ShowArtefactsOnlyButton from "./ShowArtefactsOnlyButton";
import RefreshButton from "./RefreshButton";
import CollapseAllButton from "./CollapseAllButton";

function ProjectButtons() {
  return (
    <div className="flex flex-row h-full pr-1">
      <ShowArtefactsOnlyButton />
      <RefreshButton />
      <CollapseAllButton />
    </div>
  );
}

export default ProjectButtons;
