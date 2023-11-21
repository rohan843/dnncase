import { useSelector } from "react-redux";
import PythonCodeGenButton from "./PythonCodeGenButton";

const permissibleFileTypes = {
  dc: true,
};

function DCOptions({ activeFileType, activeFileIndex }) {
  const fileData = useSelector(
    (store) => store.filesystem.fsState[activeFileIndex]
  );
  if (!permissibleFileTypes[activeFileType]) return null;
  const nodes = fileData.data.nodes;
  const edges = fileData.data.edges;
  return (
    <div className="h-full w-max flex items-center">
      {/* TODO: Generate python code on click here */}
      <PythonCodeGenButton
        onPythonCodeGen={() => {
          window.electronAPI.exportCode({ nodes, edges });
        }}
      />
    </div>
  );
}

export default DCOptions;
