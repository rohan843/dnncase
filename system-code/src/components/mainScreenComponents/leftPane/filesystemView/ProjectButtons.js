import ShowArtefactsOnlyButton from "./ShowArtefactsOnlyButton";
import RefreshButton from "./RefreshButton";
import CollapseAllButton from "./CollapseAllButton";
import NewFolderButton from "./NewFolderButton";

function ProjectButtons() {
  return (
    <div className="flex flex-row h-full pr-1">
      <NewFolderButton />
      <ShowArtefactsOnlyButton />
      <RefreshButton />
      <CollapseAllButton />
    </div>
  );
}

export default ProjectButtons;
