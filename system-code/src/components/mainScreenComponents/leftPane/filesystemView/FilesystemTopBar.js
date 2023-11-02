import ProjectIcon from "./ProjectIcon";
import ProjectTitle from "./ProjectTitle";
import ProjectButtons from "./ProjectButtons";

function FilesystemTopBar() {
  return (
    <div className="flex flex-row items-center w-full h-8 border-bottom-darker">
      <ProjectIcon />
      <ProjectTitle />
      <ProjectButtons />
    </div>
  );
}

export default FilesystemTopBar;
