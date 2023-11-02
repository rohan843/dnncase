import ShowArtefactsOnlyButton from "./ShowArtefactsOnlyButton";
import RefreshButton from "./RefreshButton";
import CollapseAllButton from "./CollapseAllButton";

function ProjectButtons() {
  return (
    <div className="flex flex-row h-full">
      <ShowArtefactsOnlyButton />
      <RefreshButton />
      <CollapseAllButton />
    </div>
  );
}

export default ProjectButtons;
