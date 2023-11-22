import { useSelector } from "react-redux";
import PythonCodeGenButton from "./PythonCodeGenButton";
import { find } from "lodash";

const permissibleFileTypes = {
  dc: true,
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getBackendFormatGraphData(nodes, edges) {
  const newNodes = nodes.map((node) => {
    const res = {};
    res.id = node.id;
    res.type = node.type;
    if (node.type === "LayerNode") {
      res.layerName = capitalizeFirstLetter(node.data.elementID);
      res.hyperparams = node.data.hyperparams;
      res.commentText = node.data.commentText;
      res.inputHandles = node.data.inputHandles;
      res.outputHandles = node.data.outputHandles;
    } else if (node.type === "ReuseNode") {
      res.layerName = capitalizeFirstLetter(node.data.elementID);
      res.hyperparams = node.data.hyperparams;
      res.commentText = node.data.commentText;
      res.inputHandles = node.data.inputHandles;
      res.outputHandles = node.data.outputHandles;
      res.reuseCount = node.data.reuseCount;
    } else if (node.type === "InputNode") {
      res.hyperparams = node.data.hyperparams;
      res.commentText = node.data.commentText;
    } else if (node.type === "OutputNode") {
      res.commentText = node.data.commentText;
    } else if (node.type === "PackerNode") {
      res.inputHandles = Array.from(
        Array(
          find(node.data.hyperparams, (hp) => hp.id === "packingCount").value
        ).keys()
      ).map((key) => key.toString());
    } else if (node.type === "UnpackerNode") {
      res.outputHandles = Array.from(
        Array(
          find(node.data.hyperparams, (hp) => hp.id === "unpackingCount").value
        ).keys()
      ).map((key) => key.toString());
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
