import FilesystemTopBar from "./FilesystemTopBar";
import HierarchicalDirectoryDisplay from "./HierarchicalDirectoryDisplay";

function FilesystemView() {
  return (
    <div className="flex flex-col">
      <FilesystemTopBar />
      <HierarchicalDirectoryDisplay />
    </div>
  );
}

export default FilesystemView;
