import { useSelector } from "react-redux";
import PythonCodeGenButton from "./PythonCodeGenButton";

const permissibleFileTypes = {
  dc: true,
};

function getBackendFormatGraphData(nodes, edges) {
  const newNodes = nodes.map((node) => {
    // TODO: Finish this.
    return node;
  });
  return { newNodes, edges };
}

function DCOptions({ activeFileType, activeFileIndex }) {
  const fileData = useSelector(
    (store) => store.filesystem.fsState[activeFileIndex]
  );
  if (!permissibleFileTypes[activeFileType]) return null;
  const nodes = fileData.data.nodes;
  const edges = fileData.data.edges;
  return (
    <div className="h-full w-max flex items-center">
      <PythonCodeGenButton
        onPythonCodeGen={() => {
          window.electronAPI.exportCode(
            getBackendFormatGraphData(nodes, edges)
          );
        }}
      />
    </div>
  );
}

export default DCOptions;
