import Option from "./Option";
import filesystemIcon from "../../../assets/filesystem.png";
import visualizerIcon from "../../../assets/visualizer.png";
import versionControlIcon from "../../../assets/version control.png";

function OptionsList() {
  return (
    <div className="w-full select-none flex flex-col items-center">
      <Option iconPNG={filesystemIcon} title="Filesystem" paneID="filesystem"/>
      <Option iconPNG={visualizerIcon} title="Visualizer" paneID="visualizer"/>
      <Option iconPNG={versionControlIcon} title="Version Control" paneID="version-control"/>
    </div>
  );
}

export default OptionsList;
