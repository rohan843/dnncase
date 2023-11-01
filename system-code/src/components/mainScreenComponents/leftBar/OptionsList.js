import Option from "./Option";
import filesystemIcon from "../../../assets/filesystem.png";

function OptionsList() {
  return (
    <div className="w-full select-none flex flex-col items-center">
      <Option iconPNG={filesystemIcon} title="Filesystem" />
      <Option iconPNG={filesystemIcon} title="Filesystem" />
      <Option iconPNG={filesystemIcon} title="Filesystem" />
    </div>
  );
}

export default OptionsList;
