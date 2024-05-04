import RightPane from "./RightPane";
import LeftPane from "./LeftPane";
import GraphCanvas from "./GraphCanvas";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  setActiveFileConfigValue,
  setActiveFileConfigValues,
  setFileValue,
} from "../../../../../store";
import {
  H1Button,
  HierarchicalElementSelector,
  Title,
  H,
  KeyValue,
  Plaintext,
  Markdown,
} from "./subcomponents";
import {
  FunctionNode,
  InputNode,
  OutputNode,
  CommentNode,
  NamedPackerNode,
  NamedUnpackerNode,
  CallBackNode,
  ArtefactImporterNode,
  ForInLoop,
  RepeatLoop,
  RawDataInputNode,
  Input,
  Output,
  DataVariableIN,
  DataVariableOUT,
  ListPackerNode,
  ListUnpackerNode,
} from "./subcomponents/nodes";
import { cloneDeep, findIndex } from "lodash";

const NodeTypes = {
  FunctionNode: FunctionNode,
  "FunctionNode/ArtefactImporter": ArtefactImporterNode,
  "FunctionNode/RawData": RawDataInputNode,
  "FunctionNode/ArrayInput": InputNode,
  "FunctionNode/RecordArrayOutput": OutputNode,
  "Loop/ForIn": ForInLoop,
  "Loop/Repeat": RepeatLoop,
  Input: Input,
  Output: Output,
  "PseudoNode/Comment": CommentNode,
  "Packer/Named": NamedPackerNode,
  "Unpacker/Named": NamedUnpackerNode,
  "Packer/Ordered": ListPackerNode,
  "Unpacker/Ordered": ListUnpackerNode,
  Callback: CallBackNode,
  "DataVariable/IN": DataVariableIN,
  "DataVariable/OUT": DataVariableOUT,
};

const permissibleFileTypes = {
  dc: true,
};

function getHierarchicalLayersFormat(storedLayerFormat) {
  const layerSubcats = new Set();
  for (let layer of Object.keys(storedLayerFormat)) {
    layerSubcats.add(storedLayerFormat[layer].subcategorization);
  }
  const arrayOfLayerSubcats = Array.from(layerSubcats);
  const res = {
    root: {
      index: "root",
      isFolder: true,
      children: arrayOfLayerSubcats,
      data: {},
    },
  };
  for (let subCat of layerSubcats) {
    res[subCat] = {
      index: subCat,
      isFolder: true,
      children: Object.keys(storedLayerFormat).filter(
        (layerIndex) =>
          storedLayerFormat[layerIndex].subcategorization === subCat
      ),
      data: { name: subCat },
    };
  }
  for (let layer of Object.keys(storedLayerFormat)) {
    res[layer] = {
      index: layer,
      isFolder: false,
      data: {
        name: storedLayerFormat[layer].displayName,
      },
    };
  }
  return res;
}

function getNodeId(...prefixes) {
  /**
   * This is the numeric suffix associated with this ID. As to why the mod is done with the number,
   * currently the choice of the divisor was arbitrary. A mod was required to prevent identification
   * of the time a node got created.
   */
  const numericID = Date.now() % 10007;
  prefixes.push(numericID);
  return prefixes.join("_");
}

function ModelCanvas({ activeFileIndex }) {
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const [newEdgesData, setNewEdgesData] = useState({});

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setInputValue("");
    closeModal();
  };

  // Load slices.
  const fileData = useSelector(
    (store) => store.filesystem.fsState[activeFileIndex]
  );
  const functions = useSelector((store) => store.artefacts.functions);

  // TODO 2: Make activeNodeID NULL on click on canvas. @Rohanray2005
  const config = useSelector((store) => store.filesystem.openFiles)[0].config;

  if (!config || !fileData || !functions) {
    // TODO: Add code here to setup config to a value from backend (default config for this file type).
    // https://tushar-balar-27618.medium.com/how-to-use-async-await-in-the-functional-component-react-js-15d0fa9137d3
  }

  const activeFileType = fileData.data.filetype;
  const activeArtefactType = fileData.data.artefacttype;
  if (!permissibleFileTypes[activeFileType]) return null;

  const nodes = fileData.data.nodes;
  const edges = fileData.data.edges.map((edge) => {
    return {
      ...edge,
      animated: true,
      style: { stroke: "#000", strokeWidth: 1.5 },
    };
  });

  const currentViewport = config.graphCanvas.viewport;

  const hierarchicalLayersFormat = getHierarchicalLayersFormat(functions);

  const setNodes = (newNodes) => {
    dispatch(
      setFileValue({
        fileIndex: activeFileIndex,
        path: ["data", "nodes"],
        value: newNodes,
      })
    );
  };

  const setEdges = (newEdges) => {
    dispatch(
      setFileValue({
        fileIndex: activeFileIndex,
        path: ["data", "edges"],
        value: newEdges,
      })
    );
  };

  function openModal(newEdgeData) {
    setModalIsOpen(true);
    setNewEdgesData((newEdgesData) => ({
      ...newEdgeData,
    }));
  }

  function closeModal() {
    setModalIsOpen(false);
    onEdgeCreation(newEdgesData);
  }

  // Each target node + target handle combination can only have a single incoming edge.
  const onEdgeCreation = (newEdgeData) => {
    const targetNode = newEdgeData.target;
    const targetNodeHandle = newEdgeData.targetHandle;
    // Edge ID only depends on the target.
    let id = `${targetNode}_${targetNodeHandle}`;
    if (targetNodeHandle === "multi-in") {
      id += `+${Date.now() % 10007}`;
    }
    findIndex(edges, (edge) => edge.id === id) === -1 &&
      setEdges([
        ...edges,
        {
          id,
          source: newEdgeData.source,
          sourceHandle: newEdgeData.sourceHandle,
          target: newEdgeData.target,
          targetHandle: newEdgeData.targetHandle,
          label: inputValue,
        },
      ]);
  };

  // Right Pane Contents
  const activeNodeID = config.activeNodeID;
  const activeNodeIndex = findIndex(nodes, (node) => node.id === activeNodeID);
  const activeNode = (activeNodeIndex !== -1 && nodes[activeNodeIndex]) || null;
  function getRightPaneContents(node, artefactType) {
    if (!node) {
      return <Title show innerText={`${artefactType} File`} />;
    }
    let nodeType = node.type;

    // Deal with Special Nodes.
    if (nodeType === "DataVariable/OUT") {
      return (
        <>
          <Title show innerText={`Data Variable OUT`} />
          <H show level={1} innerText="Parameters" />
          <KeyValue
            show
            content={[
              {
                keyInnerText: "name",
                valueInnerText: node.data.name,
                isValueEditable: true,
                removable: false,
                onValueChange: (newValue) => {
                  dispatch(
                    setFileValue({
                      fileIndex: activeFileIndex,
                      path: ["data", "nodes", activeNodeIndex, "data", "name"],
                      value: newValue,
                    })
                  );
                },
              },
            ]}
          />
        </>
      );
    } else if (nodeType === "DataVariable/IN") {
      return (
        <>
          <Title show innerText={`Data Variable IN`} />
          <H show level={1} innerText="Parameters" />
          <KeyValue
            show
            content={[
              {
                keyInnerText: "name",
                valueInnerText: node.data.name,
                isValueEditable: true,
                removable: false,
                onValueChange: (newValue) => {
                  dispatch(
                    setFileValue({
                      fileIndex: activeFileIndex,
                      path: ["data", "nodes", activeNodeIndex, "data", "name"],
                      value: newValue,
                    })
                  );
                },
              },
            ]}
          />
        </>
      );
    } else if (nodeType === "Callback") {
      return (
        <>
          <Title show innerText="Callback Node" />
          <H show level={1} innerText="Parameters" />
          <KeyValue
            show
            content={[
              {
                keyInnerText: "name",
                valueInnerText: node.data.name,
                isValueEditable: true,
                removable: false,
                onValueChange: (newValue) => {
                  dispatch(
                    setFileValue({
                      fileIndex: activeFileIndex,
                      path: ["data", "nodes", activeNodeIndex, "data", "name"],
                      value: newValue,
                    })
                  );
                },
              },
            ]}
          />
        </>
      );
    } else if (nodeType === "Unpacker/Ordered") {
      // TODO: Finish this.
      return (
        <>
          <Title show innerText="List Unpacker Node" />
          <H show innerText="Handle Count Manipulation" level={1} />
          <H1Button
            show
            innerText="Increase Output Count"
            onClick={() => {
              // const currentHandleCount =
              // dispatch(
              //   setFileValue({
              //     fileIndex: activeFileIndex,
              //     path: ["data", "nodes", activeNodeIndex, "data", "name"],
              //     value: newValue,
              //   })
              // );
            }}
          />
          <H1Button
            show
            innerText="Decrease Output Count"
            onClick={() => {
              // dispatch(
              //   setFileValue({
              //     fileIndex: activeFileIndex,
              //     path: ["data", "nodes", activeNodeIndex, "data", "name"],
              //     value: newValue,
              //   })
              // );
            }}
          />
        </>
      );
    } else if (nodeType === "Packer/Ordered") {
      // TODO: Finish this.
      return (
        <>
          <Title show innerText="List Packer Node" />
          <H show innerText="Handle Count Manipulation" level={1} />
          <H1Button
            show
            innerText="Increase Input Count"
            onClick={() => {
              // const currentHandleCount =
              // dispatch(
              //   setFileValue({
              //     fileIndex: activeFileIndex,
              //     path: ["data", "nodes", activeNodeIndex, "data", "name"],
              //     value: newValue,
              //   })
              // );
            }}
          />
          <H1Button
            show
            innerText="Decrease Input Count"
            onClick={() => {
              // dispatch(
              //   setFileValue({
              //     fileIndex: activeFileIndex,
              //     path: ["data", "nodes", activeNodeIndex, "data", "name"],
              //     value: newValue,
              //   })
              // );
            }}
          />
        </>
      );
    } else if (nodeType === "Unpacker/Named") {
      return <Title show innerText="Unpacker Node" />;
    } else if (nodeType === "Packer/Named") {
      return <Title show innerText="Packer Node" />;
    } else if (nodeType === "PseudoNode/Comment") {
      return (
        <>
          <Title show innerText="Comment Node" />
        </>
      );
    } else if (nodeType === "Output") {
      return (
        <>
          <Title show innerText="Artefact Output" />
          <H show innerText="Parameters" level={1} />
          <KeyValue
            show
            content={[
              {
                keyInnerText: "name",
                valueInnerText: node.data.name,
                isValueEditable: true,
                removable: false,
                onValueChange: (newValue) => {
                  dispatch(
                    setFileValue({
                      fileIndex: activeFileIndex,
                      path: ["data", "nodes", activeNodeIndex, "data", "name"],
                      value: newValue,
                    })
                  );
                },
              },
            ]}
          />
        </>
      );
    } else if (nodeType === "Input") {
      return (
        <>
          <Title show innerText="Artefact Input" />
          <H show innerText="Parameters" level={1} />
          <KeyValue
            show
            content={[
              {
                keyInnerText: "name",
                valueInnerText: node.data.name,
                isValueEditable: true,
                removable: false,
                onValueChange: (newValue) => {
                  dispatch(
                    setFileValue({
                      fileIndex: activeFileIndex,
                      path: ["data", "nodes", activeNodeIndex, "data", "name"],
                      value: newValue,
                    })
                  );
                },
              },
            ]}
          />
        </>
      );
    }

    // In case of wrapped function nodes, correct nodeType to the actual type of the enclosed node.
    if (nodeType === "Loop/Repeat") {
      nodeType = node.data.enclosedNodeType;
    } else if (nodeType === "Loop/ForIn") {
      nodeType = node.data.enclosedNodeType;
    }

    // TODO 1: Finish Contents. @Rohanray2005
    // Deal with function nodes.
    if (nodeType === "FunctionNode/RecordArrayOutput") {
    } else if (nodeType === "FunctionNode/ArrayInput") {
    } else if (nodeType === "FunctionNode/RawData") {
    } else if (nodeType === "FunctionNode/ArtefactImporter") {
    } else if (nodeType === "FunctionNode") {
    } else {
      return <Title show innerText={node.type} />;
    }
  }
  const rightPaneContents = getRightPaneContents(
    activeNode,
    activeArtefactType || activeFileType
  );

  return (
    <div className="h-full w-full background-lighter relative overflow-hidden">
      <GraphCanvas
        NodeTypes={NodeTypes}
        edges={edges}
        nodes={nodes.map((node) => {
          const deepCopyOfNode = cloneDeep(node);
          deepCopyOfNode.data.onActivate = () => {
            dispatch(
              setActiveFileConfigValue({
                fileIndex: activeFileIndex,
                path: ["activeNodeID"],
                value: deepCopyOfNode.id,
              })
            );
          };
          deepCopyOfNode.data.onActivateAndShowInPane = () => {
            dispatch(
              setActiveFileConfigValues({
                fileIndex: activeFileIndex,
                editPoints: [
                  {
                    path: ["activeNodeID"],
                    value: deepCopyOfNode.id,
                  },
                  {
                    path: ["rightPaneOpen"],
                    value: true,
                  },
                ],
              })
            );
          };
          if (deepCopyOfNode.type === "PseudoNode/Comment") {
            deepCopyOfNode.data.onToggleTODOStatus = () => {
              const currentNodeID = deepCopyOfNode.id;
              const newNodes = nodes.map((node) => {
                if (node.id !== currentNodeID) {
                  return node;
                } else {
                  const newNode = cloneDeep(node);
                  newNode.data.isCommentTODO = !node.data.isCommentTODO;
                  if (
                    newNode.data.isCommentTODO &&
                    !newNode.data.commentText.startsWith("TODO: ")
                  ) {
                    newNode.data.commentText =
                      "TODO: " + newNode.data.commentText;
                  }
                  return newNode;
                }
              });
              setNodes(newNodes);
            };
            deepCopyOfNode.data.onCommentChange = (newCommentValue) => {
              const currentNodeID = deepCopyOfNode.id;
              const newNodes = nodes.map((node) => {
                if (node.id !== currentNodeID) {
                  return node;
                } else {
                  const newNode = cloneDeep(node);
                  newNode.data.commentText = newCommentValue;
                  return newNode;
                }
              });
              setNodes(newNodes);
            };
          }
          return deepCopyOfNode;
        })}
        onNodesChange={(newNodes) =>
          setNodes(
            newNodes.map((node) => {
              delete node.data.onActivate;
              delete node.data.onActivateAndShowInPane;
              delete node.data.onToggleTODOStatus;
              delete node.data.onCommentChange;
              return node;
            })
          )
        }
        onEdgesChange={(newEdges) => setEdges(newEdges)}
        onEdgeCreation={openModal}
        onViewportChange={(viewport) => {
          dispatch(
            setActiveFileConfigValue({
              fileIndex: activeFileIndex,
              path: ["graphCanvas", "viewport"],
              value: viewport,
            })
          );
        }}
      />
      <LeftPane
        open={config.leftPaneOpen}
        onOpen={() => {
          dispatch(
            setActiveFileConfigValue({
              fileIndex: activeFileIndex,
              path: ["leftPaneOpen"],
              value: true,
            })
          );
        }}
        onClose={() => {
          dispatch(
            setActiveFileConfigValue({
              fileIndex: activeFileIndex,
              path: ["leftPaneOpen"],
              value: false,
            })
          );
        }}
      >
        <H1Button
          show
          innerText="Functions"
          onClick={() => {
            dispatch(
              setActiveFileConfigValue({
                fileIndex: activeFileIndex,
                path: ["leftPane", "layerSelector", "show"],
                value: !config.leftPane.layerSelector.show,
              })
            );
          }}
        />
        <HierarchicalElementSelector
          show={config.leftPane.layerSelector.show}
          options={[
            {
              id: "repeat-loop",
              label: "wrap node in a repeat loop",
            },
            {
              id: "for-in-loop",
              label: "wrap node in a for-in loop",
            },
          ]}
          contents={hierarchicalLayersFormat}
          onSelect={(elementID, options) => {
            let canvasDisplayName = functions[elementID].displayName;
            if (
              functions[elementID].nodeType === "FunctionNode/ArtefactImporter"
            ) {
              canvasDisplayName = null;
            }
            if (options["repeat-loop"]) {
              setNodes([
                ...nodes,
                {
                  id: getNodeId("FunctionNode", "RepeatLoop", elementID),
                  position: {
                    x: -currentViewport.x,
                    y: -currentViewport.y,
                    zoom: currentViewport.zoom,
                  },
                  type: "Loop/Repeat",
                  data: {
                    enclosedNodeType: functions[elementID].nodeType,
                    name: canvasDisplayName,
                    hyperparams: functions[elementID].defaultHyperparams,
                    commentText: "",
                    commentType: "plain",
                    inputHandles: functions[elementID].defaultInputHandles,
                    outputHandles: functions[elementID].defaultOutputHandles,
                    elementID,
                  },
                },
              ]);
            } else if (options["for-in-loop"]) {
              setNodes([
                ...nodes,
                {
                  id: getNodeId("FunctionNode", "ForInLoop", elementID),
                  position: {
                    x: -currentViewport.x,
                    y: -currentViewport.y,
                    zoom: currentViewport.zoom,
                  },
                  type: "Loop/ForIn",
                  data: {
                    enclosedNodeType: functions[elementID].nodeType,
                    name: canvasDisplayName,
                    hyperparams: functions[elementID].defaultHyperparams,
                    commentText: "",
                    commentType: "plain",
                    inputHandles: functions[elementID].defaultInputHandles,
                    outputHandles: functions[elementID].defaultOutputHandles,
                    elementID,
                  },
                },
              ]);
            } else {
              setNodes([
                ...nodes,
                {
                  id: getNodeId("FunctionNode", elementID),
                  position: {
                    x: -currentViewport.x,
                    y: -currentViewport.y,
                    zoom: currentViewport.zoom,
                  },
                  type: functions[elementID].nodeType,
                  data: {
                    name: canvasDisplayName,
                    hyperparams: functions[elementID].defaultHyperparams,
                    commentText: "",
                    commentType: "plain",
                    inputHandles: functions[elementID].defaultInputHandles,
                    outputHandles: functions[elementID].defaultOutputHandles,
                    elementID,
                  },
                },
              ]);
            }
          }}
        />
        <H1Button
          show
          innerText="Artefact Input Node"
          onClick={() => {
            setNodes([
              ...nodes,
              {
                id: getNodeId("Input"),
                position: currentViewport,
                type: "Input",
                data: {
                  name: null,
                },
              },
            ]);
          }}
        />
        <H1Button
          show
          innerText="Artefact Output Node"
          onClick={() => {
            setNodes([
              ...nodes,
              {
                id: getNodeId("Output"),
                position: currentViewport,
                type: "Output",
                data: {
                  name: null,
                },
              },
            ]);
          }}
        />
        <H1Button
          show
          innerText="Data Variable IN"
          onClick={() => {
            setNodes([
              ...nodes,
              {
                id: getNodeId("Output"),
                position: currentViewport,
                type: "DataVariable/IN",
                data: {
                  hyperparams: [],
                  name: null,
                },
              },
            ]);
          }}
        />
        <H1Button
          show
          innerText="Data Variable OUT"
          onClick={() => {
            setNodes([
              ...nodes,
              {
                id: getNodeId("Output"),
                position: currentViewport,
                type: "DataVariable/OUT",
                data: {
                  hyperparams: [],
                  name: null,
                },
              },
            ]);
          }}
        />
        <H1Button
          show
          innerText="Packer Node"
          onClick={() => {
            setNodes([
              ...nodes,
              {
                id: getNodeId("PackerNode"),
                position: currentViewport,
                type: "Packer/Named",
                data: {
                  hyperparams: [{ id: "packingCount", value: 2 }],
                  commentText: "",
                  commentType: "plain",
                },
              },
            ]);
          }}
        />
        <H1Button
          show
          innerText="Unpacker Node"
          onClick={() => {
            setNodes([
              ...nodes,
              {
                id: getNodeId("UnpackerNode"),
                position: currentViewport,
                type: "Unpacker/Named",
                data: {
                  hyperparams: [{ id: "unpackingCount", value: 2 }],
                  commentText: "",
                  commentType: "plain",
                  outputHandles: ["o0", "o1"],
                },
              },
            ]);
          }}
        />
        <H1Button
          show
          innerText="List Packer Node"
          onClick={() => {
            setNodes([
              ...nodes,
              {
                id: getNodeId("ListPackerNode"),
                position: currentViewport,
                type: "Packer/Ordered",
                data: {
                  hyperparams: [{ id: "packingCount", value: 2 }],
                  commentText: "",
                  commentType: "plain",
                },
              },
            ]);
          }}
        />
        <H1Button
          show
          innerText="List Unpacker Node"
          onClick={() => {
            setNodes([
              ...nodes,
              {
                id: getNodeId("ListUnpackerNode"),
                position: currentViewport,
                type: "Unpacker/Ordered",
                data: {
                  hyperparams: [{ id: "unpackingCount", value: 2 }],
                  commentText: "",
                  commentType: "plain",
                },
              },
            ]);
          }}
        />
        <H1Button
          show
          innerText="Callback Node"
          onClick={() => {
            const currentNodeID = getNodeId("CallBackNode");
            setNodes([
              ...nodes,
              {
                id: currentNodeID,
                position: currentViewport,
                data: {
                  name: null,
                },
                type: "Callback",
              },
            ]);
          }}
        />
        <H1Button
          show
          innerText="Comment Node"
          onClick={() => {
            const currentNodeID = getNodeId("CommentNode");
            setNodes([
              ...nodes,
              {
                id: currentNodeID,
                position: currentViewport,
                data: {
                  isCommentTODO: false,
                  commentText: "",
                },
                type: "PseudoNode/Comment",
              },
            ]);
          }}
        />
      </LeftPane>
      <RightPane
        open={config.rightPaneOpen}
        onOpen={() => {
          dispatch(
            setActiveFileConfigValue({
              fileIndex: activeFileIndex,
              path: ["rightPaneOpen"],
              value: true,
            })
          );
        }}
        onClose={() => {
          dispatch(
            setActiveFileConfigValue({
              fileIndex: activeFileIndex,
              path: ["rightPaneOpen"],
              value: false,
            })
          );
        }}
      >
        {rightPaneContents}
      </RightPane>
      <div className="modal" id="modal">
        {modalIsOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Enter Edge Label</h2>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter edge label"
                autoFocus
              />
              <button onClick={handleSubmit}>OK</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModelCanvas;
