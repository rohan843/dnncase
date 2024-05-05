import { useSelector } from "react-redux";
import PythonCodeGenButton from "./PythonCodeGenButton";
import { cloneDeep } from "lodash";
// import { cloneDeep, find, findIndex } from "lodash";

const permissibleFileTypes = {
  dc: true,
};

function flattenNodeDataObject(nodeData) {
  return;
}

function getBackendFormatGraphData(fileContents, executedFileName) {
  const artefactArray = [];
  for (let artefact in fileContents) {
    artefactArray.push({
      artefactMetadata: {
        name: artefact,
        artefactType: fileContents[artefact].data.artefacttype,
      },
      nodes: fileContents[artefact].data.nodes.map((node) => {
        return {
          id: node.id,
          nodeType: node.type.split("/")[0],
          nodeSubtype: node.type.split("/")[1],
          nodeData: flattenNodeDataObject(node.data),
        };
      }),
      edges: fileContents[artefact].data.edges.map((edge) => {
        const label = edge.label;
        let inLabel = null;
        let outLabel = null;

        if (label && typeof label === typeof "" && label.includes(":")) {
          inLabel = label.split(":")[0];
          outLabel = label.split(":")[1];
        } else {
          inLabel = outLabel = label;
        }

        return {
          sourceNodeID: edge.source,
          sourceNodeHandleID: edge.sourceHandle,
          targetNodeID: edge.target,
          targetNodeHandleID: edge.targetHandle,
          inLabel,
          outLabel,
        };
      }),
    });
  }
  return JSON.stringify({ artefactArray, executedFileName });
}

function download(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function DCOptions({ activeFileType, activeFileIndex }) {
  const fsState = useSelector((store) => store.filesystem.fsState);
  if (!permissibleFileTypes[activeFileType]) return null;

  return (
    <div className="h-full w-max flex items-center">
      <PythonCodeGenButton
        onPythonCodeGen={() => {
          const executedFileName = activeFileIndex
            .split("/")
            .slice(-1)[0]
            .split(".")[0];

          const tmpSplitPath = activeFileIndex.split("/");
          const tmpFolderSplitPath = tmpSplitPath.slice(0, -1);
          const folderIndex = tmpFolderSplitPath.join("/");

          const filesToProcess = fsState[folderIndex].children;

          const fileContents = {};

          for (let file of filesToProcess) {
            fileContents[file.split("/").slice(-1)[0].split(".")[0]] =
              cloneDeep(fsState[file]);
          }

          // TODO: generate code from new compiler here.
          const code = getBackendFormatGraphData(
            fileContents,
            executedFileName
          );
          download("dnn_code.json", code);
        }}
      />
    </div>
  );
}

export default DCOptions;
