// TODO: convert nodes/edges arrays to objects.

import RightPane from "./RightPane";
import LeftPane from "./LeftPane";
import GraphCanvas from "./GraphCanvas";
import { useDispatch, useSelector } from "react-redux";
import {
  setValueAtPath,
  setValuesAtPaths,
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
  LayerNode,
  InputNode,
  OutputNode,
  UnpackerNode,
  PackerNode,
  CommentNode,
} from "./subcomponents/nodes";
import { cloneDeep, findIndex } from "lodash";

const NodeTypes = {
  LayerNode,
  InputNode,
  OutputNode,
  UnpackerNode,
  PackerNode,
  CommentNode,
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

  // Load slices.
  const fileData = useSelector(
    (store) => store.filesystem.fsState[activeFileIndex]
  );
  const layers = useSelector((store) => store.artefacts.layers);
  const config = useSelector((store) => store.viewConfig[activeFileIndex]);

  if (!config || !fileData || !layers) {
    // TODO: Add code here to setup config to a value from backend (default config for this file type).
    // https://tushar-balar-27618.medium.com/how-to-use-async-await-in-the-functional-component-react-js-15d0fa9137d3
  }

  const activeFileType = fileData.data.filetype;
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

  const hierarchicalLayersFormat = getHierarchicalLayersFormat(layers);

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

  // Each target node + target handle combination can only have a single incoming edge.
  const onEdgeCreation = (newEdgeData) => {
    const targetNode = newEdgeData.target;
    const targetNodeHandle = newEdgeData.targetHandle;
    // Edge ID only depends on the target.
    const id = `${targetNode}_${targetNodeHandle}`;
    findIndex(edges, (edge) => edge.id === id) === -1 &&
      setEdges([
        ...edges,
        {
          id,
          source: newEdgeData.source,
          sourceHandle: newEdgeData.sourceHandle,
          target: newEdgeData.target,
          targetHandle: newEdgeData.targetHandle,
        },
      ]);
  };

  // Right Pane Contents
  const activeNodeID = config.activeNodeID;
  const activeNodeIndex = findIndex(nodes, (node) => node.id === activeNodeID);
  const activeNode = nodes[activeNodeIndex];
  function getRightPaneContents(node, fileType) {
    if (!node) {
      return <Title show innerText={`${fileType.toUpperCase()} File`} />;
    } else if (node.type === "LayerNode") {
      return (
        <>
          {/* Title */}
          <Title show innerText={node.data.name} />

          {/* Arguments Table */}
          <H show level={1} innerText="Arguments" />
          <KeyValue
            show
            content={node.data.hyperparams.map(({ id, value }, ind) => {
              return {
                keyInnerText: id,
                valueInnerText: value,
                isValueEditable: true,
                onValueChange: (newValue) => {
                  console.log(newValue);
                  dispatch(
                    setFileValue({
                      fileIndex: activeFileIndex,
                      path: [
                        "data",
                        "nodes",
                        activeNodeIndex,
                        "data",
                        "hyperparams",
                        ind,
                        "value",
                      ],
                      value: newValue,
                    })
                  );
                },
              };
            })}
            enableNewKeyValueInput={
              config.rightPane.hyperparamKeyValueInput.enableNewKeyValueInput
            }
            onNewKeyValueInputSubmit={(key, value) => {
              const keyIndex = findIndex(
                node.data.hyperparams,
                (hp) => hp.id === key
              );
              const deepCopyOfNode = cloneDeep(node);
              if (keyIndex !== -1) {
                // The key already existed as a hyperparam.
                deepCopyOfNode.data.hyperparams[keyIndex].value = value;
              } else {
                deepCopyOfNode.data.hyperparams.push({
                  id: key,
                  value,
                });
              }
              dispatch(
                setFileValue({
                  fileIndex: activeFileIndex,
                  path: ["data", "nodes", activeNodeIndex],
                  value: deepCopyOfNode,
                })
              );
              dispatch(
                setValueAtPath({
                  fileIndex: activeFileIndex,
                  path: [
                    "rightPane",
                    "hyperparamKeyValueInput",
                    "enableNewKeyValueInput",
                  ],
                  value: false,
                })
              );
            }}
            onCancel={() => {
              config.rightPane.hyperparamKeyValueInput.enableNewKeyValueInput &&
                dispatch(
                  setValueAtPath({
                    fileIndex: activeFileIndex,
                    path: [
                      "rightPane",
                      "hyperparamKeyValueInput",
                      "enableNewKeyValueInput",
                    ],
                    value: false,
                  })
                );
            }}
            onAdd={() => {
              !config.rightPane.hyperparamKeyValueInput
                .enableNewKeyValueInput &&
                dispatch(
                  setValueAtPath({
                    fileIndex: activeFileIndex,
                    path: [
                      "rightPane",
                      "hyperparamKeyValueInput",
                      "enableNewKeyValueInput",
                    ],
                    value: true,
                  })
                );
            }}
            onNewWindow={() => {
              alert("newWindow");
            }}
          />

          {/* Code Comments */}
          <H show level={1} innerText="Code Comments" />
          <Plaintext
            show={node.data.commentType === "plain"}
            innerText={node.data.commentText}
            onChange={(newValue) => {
              dispatch(
                setFileValue({
                  fileIndex: activeFileIndex,
                  path: [
                    "data",
                    "nodes",
                    activeNodeIndex,
                    "data",
                    "commentText",
                  ],
                  value: newValue,
                })
              );
            }}
            onConvertToMarkdown={() => {
              dispatch(
                setFileValue({
                  fileIndex: activeFileIndex,
                  path: [
                    "data",
                    "nodes",
                    activeNodeIndex,
                    "data",
                    "commentType",
                  ],
                  value: "markdown",
                })
              );
            }}
          />
          <Markdown
            show={node.data.commentType === "markdown"}
            innerText={node.data.commentText}
            onChange={(newValue) => {
              dispatch(
                setFileValue({
                  fileIndex: activeFileIndex,
                  path: [
                    "data",
                    "nodes",
                    activeNodeIndex,
                    "data",
                    "commentText",
                  ],
                  value: newValue,
                })
              );
            }}
            onConvertToPlaintext={() => {
              dispatch(
                setFileValue({
                  fileIndex: activeFileIndex,
                  path: [
                    "data",
                    "nodes",
                    activeNodeIndex,
                    "data",
                    "commentType",
                  ],
                  value: "plain",
                })
              );
            }}
          />
        </>
      );
    } else if (node.type === "InputNode") {
      return (
        <>
          {/* Title */}
          <Title show innerText="Input" />

          {/* Arguments Table */}
          <H show level={1} innerText="Arguments" />
          <KeyValue
            show
            content={node.data.hyperparams.map(({ id, value }, ind) => {
              return {
                keyInnerText: id,
                valueInnerText: value,
                isValueEditable: true,
                onValueChange: (newValue) => {
                  console.log(newValue);
                  dispatch(
                    setFileValue({
                      fileIndex: activeFileIndex,
                      path: [
                        "data",
                        "nodes",
                        activeNodeIndex,
                        "data",
                        "hyperparams",
                        ind,
                        "value",
                      ],
                      value: newValue,
                    })
                  );
                },
              };
            })}
            enableNewKeyValueInput={
              config.rightPane.hyperparamKeyValueInput.enableNewKeyValueInput
            }
            onNewKeyValueInputSubmit={(key, value) => {
              const keyIndex = findIndex(
                node.data.hyperparams,
                (hp) => hp.id === key
              );
              const deepCopyOfNode = cloneDeep(node);
              if (keyIndex !== -1) {
                // The key already existed as a hyperparam.
                deepCopyOfNode.data.hyperparams[keyIndex].value = value;
              } else {
                deepCopyOfNode.data.hyperparams.push({
                  id: key,
                  value,
                });
              }
              dispatch(
                setFileValue({
                  fileIndex: activeFileIndex,
                  path: ["data", "nodes", activeNodeIndex],
                  value: deepCopyOfNode,
                })
              );
              dispatch(
                setValueAtPath({
                  fileIndex: activeFileIndex,
                  path: [
                    "rightPane",
                    "hyperparamKeyValueInput",
                    "enableNewKeyValueInput",
                  ],
                  value: false,
                })
              );
            }}
            onCancel={() => {
              config.rightPane.hyperparamKeyValueInput.enableNewKeyValueInput &&
                dispatch(
                  setValueAtPath({
                    fileIndex: activeFileIndex,
                    path: [
                      "rightPane",
                      "hyperparamKeyValueInput",
                      "enableNewKeyValueInput",
                    ],
                    value: false,
                  })
                );
            }}
            onAdd={() => {
              !config.rightPane.hyperparamKeyValueInput
                .enableNewKeyValueInput &&
                dispatch(
                  setValueAtPath({
                    fileIndex: activeFileIndex,
                    path: [
                      "rightPane",
                      "hyperparamKeyValueInput",
                      "enableNewKeyValueInput",
                    ],
                    value: true,
                  })
                );
            }}
            onNewWindow={() => {
              alert("newWindow");
            }}
          />

          {/* Code Comments */}
          <H show level={1} innerText="Code Comments" />
          <Plaintext
            show={node.data.commentType === "plain"}
            innerText={node.data.commentText}
            onChange={(newValue) => {
              dispatch(
                setFileValue({
                  fileIndex: activeFileIndex,
                  path: [
                    "data",
                    "nodes",
                    activeNodeIndex,
                    "data",
                    "commentText",
                  ],
                  value: newValue,
                })
              );
            }}
            onConvertToMarkdown={() => {
              dispatch(
                setFileValue({
                  fileIndex: activeFileIndex,
                  path: [
                    "data",
                    "nodes",
                    activeNodeIndex,
                    "data",
                    "commentType",
                  ],
                  value: "markdown",
                })
              );
            }}
          />
          <Markdown
            show={node.data.commentType === "markdown"}
            innerText={node.data.commentText}
            onChange={(newValue) => {
              dispatch(
                setFileValue({
                  fileIndex: activeFileIndex,
                  path: [
                    "data",
                    "nodes",
                    activeNodeIndex,
                    "data",
                    "commentText",
                  ],
                  value: newValue,
                })
              );
            }}
            onConvertToPlaintext={() => {
              dispatch(
                setFileValue({
                  fileIndex: activeFileIndex,
                  path: [
                    "data",
                    "nodes",
                    activeNodeIndex,
                    "data",
                    "commentType",
                  ],
                  value: "plain",
                })
              );
            }}
          />
        </>
      );
    } else if (node.type === "OutputNode") {
      return (
        <>
          {/* Title */}
          <Title show innerText="Output" />

          {/* Arguments Table */}
          <H show level={1} innerText="Arguments" />
          <KeyValue
            show
            content={node.data.hyperparams.map(({ id, value }, ind) => {
              return {
                keyInnerText: id,
                valueInnerText: value,
                isValueEditable: true,
                onValueChange: (newValue) => {
                  console.log(newValue);
                  dispatch(
                    setFileValue({
                      fileIndex: activeFileIndex,
                      path: [
                        "data",
                        "nodes",
                        activeNodeIndex,
                        "data",
                        "hyperparams",
                        ind,
                        "value",
                      ],
                      value: newValue,
                    })
                  );
                },
              };
            })}
            enableNewKeyValueInput={
              config.rightPane.hyperparamKeyValueInput.enableNewKeyValueInput
            }
            onNewKeyValueInputSubmit={(key, value) => {
              const keyIndex = findIndex(
                node.data.hyperparams,
                (hp) => hp.id === key
              );
              const deepCopyOfNode = cloneDeep(node);
              if (keyIndex !== -1) {
                // The key already existed as a hyperparam.
                deepCopyOfNode.data.hyperparams[keyIndex].value = value;
              } else {
                deepCopyOfNode.data.hyperparams.push({
                  id: key,
                  value,
                });
              }
              dispatch(
                setFileValue({
                  fileIndex: activeFileIndex,
                  path: ["data", "nodes", activeNodeIndex],
                  value: deepCopyOfNode,
                })
              );
              dispatch(
                setValueAtPath({
                  fileIndex: activeFileIndex,
                  path: [
                    "rightPane",
                    "hyperparamKeyValueInput",
                    "enableNewKeyValueInput",
                  ],
                  value: false,
                })
              );
            }}
            onCancel={() => {
              config.rightPane.hyperparamKeyValueInput.enableNewKeyValueInput &&
                dispatch(
                  setValueAtPath({
                    fileIndex: activeFileIndex,
                    path: [
                      "rightPane",
                      "hyperparamKeyValueInput",
                      "enableNewKeyValueInput",
                    ],
                    value: false,
                  })
                );
            }}
            onAdd={() => {
              !config.rightPane.hyperparamKeyValueInput
                .enableNewKeyValueInput &&
                dispatch(
                  setValueAtPath({
                    fileIndex: activeFileIndex,
                    path: [
                      "rightPane",
                      "hyperparamKeyValueInput",
                      "enableNewKeyValueInput",
                    ],
                    value: true,
                  })
                );
            }}
            onNewWindow={() => {
              alert("newWindow");
            }}
          />

          {/* Code Comments */}
          <H show level={1} innerText="Code Comments" />
          <Plaintext
            show={node.data.commentType === "plain"}
            innerText={node.data.commentText}
            onChange={(newValue) => {
              dispatch(
                setFileValue({
                  fileIndex: activeFileIndex,
                  path: [
                    "data",
                    "nodes",
                    activeNodeIndex,
                    "data",
                    "commentText",
                  ],
                  value: newValue,
                })
              );
            }}
            onConvertToMarkdown={() => {
              dispatch(
                setFileValue({
                  fileIndex: activeFileIndex,
                  path: [
                    "data",
                    "nodes",
                    activeNodeIndex,
                    "data",
                    "commentType",
                  ],
                  value: "markdown",
                })
              );
            }}
          />
          <Markdown
            show={node.data.commentType === "markdown"}
            innerText={node.data.commentText}
            onChange={(newValue) => {
              dispatch(
                setFileValue({
                  fileIndex: activeFileIndex,
                  path: [
                    "data",
                    "nodes",
                    activeNodeIndex,
                    "data",
                    "commentText",
                  ],
                  value: newValue,
                })
              );
            }}
            onConvertToPlaintext={() => {
              dispatch(
                setFileValue({
                  fileIndex: activeFileIndex,
                  path: [
                    "data",
                    "nodes",
                    activeNodeIndex,
                    "data",
                    "commentType",
                  ],
                  value: "plain",
                })
              );
            }}
          />
        </>
      );
    } else if (node.type === "CommentNode") {
      return <Title show innerText="Comment" />;
    }
  }
  const rightPaneContents = getRightPaneContents(activeNode, activeFileType);

  return (
    <div className="h-full w-full background-lighter relative overflow-hidden">
      <GraphCanvas
        NodeTypes={NodeTypes}
        edges={edges}
        nodes={nodes.map((node) => {
          const deepCopyOfNode = cloneDeep(node);
          deepCopyOfNode.data.onActivate = () => {
            dispatch(
              setValueAtPath({
                fileIndex: activeFileIndex,
                path: ["activeNodeID"],
                value: deepCopyOfNode.id,
              })
            );
          };
          deepCopyOfNode.data.onActivateAndShowInPane = () => {
            dispatch(
              setValuesAtPaths({
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
          if (deepCopyOfNode.type === "CommentNode") {
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
        onEdgeCreation={onEdgeCreation}
        onViewportChange={(viewport) => {
          dispatch(
            setValueAtPath({
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
            setValueAtPath({
              fileIndex: activeFileIndex,
              path: ["leftPaneOpen"],
              value: true,
            })
          );
        }}
        onClose={() => {
          dispatch(
            setValueAtPath({
              fileIndex: activeFileIndex,
              path: ["leftPaneOpen"],
              value: false,
            })
          );
        }}
      >
        <H1Button
          show
          innerText="Layers"
          onClick={() => {
            dispatch(
              setValueAtPath({
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
              id: "reusable",
              label: "apply reuse block",
            },
          ]}
          contents={hierarchicalLayersFormat}
          onSelect={(elementID, options) => {
            if (!options.reusable) {
              setNodes([
                ...nodes,
                {
                  id: getNodeId("LayerNode", elementID),
                  position: currentViewport,
                  type: "LayerNode",
                  data: {
                    name: layers[elementID].displayName,
                    trained: false,
                    usingPrevWeights: false,
                    hyperparams: layers[elementID].defaultHyperparams,
                    commentText: "",
                    commentType: "plain",
                    reuseCount: 0,
                    inputHandles: layers[elementID].defaultInputHandles,
                    outputHandles: layers[elementID].defaultOutputHandles,
                  },
                },
              ]);
            } else {
              // TODO: add reusability.
            }
          }}
        />
        <H1Button
          show
          innerText="Add an Input"
          onClick={() => {
            setNodes([
              ...nodes,
              {
                id: getNodeId("InputNode"),
                position: currentViewport,
                type: "InputNode",
                data: {
                  hyperparams: [{ id: "inputShape", value: null }],
                  commentText: "",
                  commentType: "plain",
                  outputHandles: ["in"],
                },
              },
            ]);
          }}
        />
        <H1Button
          show
          innerText="Add an Output"
          onClick={() => {
            setNodes([
              ...nodes,
              {
                id: getNodeId("OutputNode"),
                position: currentViewport,
                type: "OutputNode",
                data: {
                  hyperparams: [{ id: "outputShape", value: null }],
                  commentText: "",
                  commentType: "plain",
                  outputHandles: ["out"],
                },
              },
            ]);
          }}
        />
        <H1Button show innerText="Add a Packer" onClick={() => {}} />
        <H1Button show innerText="Add an Unpacker" onClick={() => {}} />
        <H1Button
          show
          innerText="Add a Comment"
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
                type: "CommentNode",
              },
            ]);
          }}
        />
      </LeftPane>
      <RightPane
        open={config.rightPaneOpen}
        onOpen={() => {
          dispatch(
            setValueAtPath({
              fileIndex: activeFileIndex,
              path: ["rightPaneOpen"],
              value: true,
            })
          );
        }}
        onClose={() => {
          dispatch(
            setValueAtPath({
              fileIndex: activeFileIndex,
              path: ["rightPaneOpen"],
              value: false,
            })
          );
        }}
      >
        {rightPaneContents}
      </RightPane>
    </div>
  );
}

export default ModelCanvas;
