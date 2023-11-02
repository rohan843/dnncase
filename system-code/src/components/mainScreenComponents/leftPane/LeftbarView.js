import FilesystemView from "./filesystemView/FilesystemView";

function LeftbarView({ viewType }) {
  return (
    <div className="h-full w-full">
      {viewType === "fs" && <FilesystemView />}
    </div>
  );
}

export default LeftbarView;
