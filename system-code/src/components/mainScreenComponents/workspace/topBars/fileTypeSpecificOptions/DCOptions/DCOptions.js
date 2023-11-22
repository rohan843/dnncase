import { useSelector } from "react-redux";
import PythonCodeGenButton from "./PythonCodeGenButton";

const permissibleFileTypes = {
  dc: true,
};

function getBackendFormatGraphData(nodes, edges) {
  const newNodes = nodes.map((node) => {
    const res = {};
    res.id = node.id;
    res.type = node.type;
    if (node.type === "LayerNode") {
    } else if (node.type === "ReuseNode") {
    } else if (node.type === "InputNode") {
    } else if (node.type === "OutputNode") {
    } else if (node.type === "PackerNode") {
    } else if (node.type === "UnpackerNode") {
    }
    return res;
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
