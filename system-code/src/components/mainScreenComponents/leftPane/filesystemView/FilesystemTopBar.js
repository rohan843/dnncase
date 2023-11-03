import ProjectIcon from "./ProjectIcon";
import ProjectTitle from "./ProjectTitle";
import ProjectButtons from "./ProjectButtons";

function FilesystemTopBar() {
  return (
    <div className="flex flex-row items-center justify-between w-full h-8 border-bottom-darker select-none">
      <div className="flex flex-row items-center h-full">
        <ProjectIcon />
        <ProjectTitle title="Project1" />
      </div>
      <ProjectButtons />
    </div>
  );
}

export default FilesystemTopBar;
