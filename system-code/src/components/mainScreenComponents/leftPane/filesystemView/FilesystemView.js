import FilesystemTopBar from "./FilesystemTopBar";
import HierarchicalDirectoryDisplay from "./HierarchicalDirectoryDisplay";

function FilesystemView() {
  return (
    <div className="h-full w-full flex flex-col">
      <FilesystemTopBar />
      <HierarchicalDirectoryDisplay />
    </div>
  );
}

export default FilesystemView;
