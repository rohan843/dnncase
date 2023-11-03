import FilesystemView from "./filesystemView/FilesystemView";

function LeftbarView({ viewType }) {
  return (
    <div className="h-full w-full">
      {viewType === "filesystem" && <FilesystemView />}
    </div>
  );
}

export default LeftbarView;
