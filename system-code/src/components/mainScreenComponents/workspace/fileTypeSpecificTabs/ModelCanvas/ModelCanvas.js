// TODO: convert nodes/edges arrays to objects.

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
  LayerNode,
  InputNode,
  OutputNode,
  UnpackerNode,
  PackerNode,
  CommentNode,
  ReuseNode,
  NamedPackerNode,
  NamedUnpackerNode,
  CallBackNode
} from "./subcomponents/nodes";
import { cloneDeep, findIndex } from "lodash";

const NodeTypes = {
  LayerNode,
  InputNode,
  OutputNode,
  UnpackerNode,
  PackerNode,
  CommentNode,
  ReuseNode,
  NamedPackerNode,
  NamedUnpackerNode,
  CallBackNode
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
    closeModal();
  };

  // Load slices.
  const fileData = useSelector(
    (store) => store.filesystem.fsState[activeFileIndex]
  );
  const layers = useSelector((store) => store.artefacts.layers);

  const config = useSelector((store) => store.filesystem.openFiles)[0].config;

  if (!config || !fileData || !layers) {
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
  const activeNode = nodes[activeNodeIndex];
  function getRightPaneContents(node, artefactType) {
    // TODO: Packer, Unpacker
    if (!node) {
      return <Title show innerText={`${artefactType} File`} />;
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
                setActiveFileConfigValue({
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
                  setActiveFileConfigValue({
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
                  setActiveFileConfigValue({
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
    } else if (node.type === "ReuseNode") {
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
                setActiveFileConfigValue({
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
                  setActiveFileConfigValue({
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
                  setActiveFileConfigValue({
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

          {/* Reuse Count */}
          <H1Button
            show
            onClick={() => {
              const deepCopyOfNode = cloneDeep(node);
              deepCopyOfNode.data.reuseCount++;
              dispatch(
                setFileValue({
                  fileIndex: activeFileIndex,
                  path: ["data", "nodes", activeNodeIndex],
                  value: deepCopyOfNode,
                })
              );
            }}
            innerText="Increase Reuse Count"
          />
          <H1Button
            show={node.data.reuseCount > 2}
            onClick={() => {
              const deepCopyOfNode = cloneDeep(node);
              deepCopyOfNode.data.reuseCount--;
              dispatch(
                setFileValue({
                  fileIndex: activeFileIndex,
                  path: ["data", "nodes", activeNodeIndex],
                  value: deepCopyOfNode,
                })
              );
            }}
            innerText="Decrease Reuse Count"
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
          <Title show innerText={`${node.id}`} />

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
                setActiveFileConfigValue({
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
                  setActiveFileConfigValue({
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
                  setActiveFileConfigValue({
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
                setActiveFileConfigValue({
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
                  setActiveFileConfigValue({
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
                  setActiveFileConfigValue({
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
    } else if (node.type === "PackerNode") {
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
                setActiveFileConfigValue({
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
                  setActiveFileConfigValue({
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
                  setActiveFileConfigValue({
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
    } else if (node.type === "UnpackerNode") {
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
                setActiveFileConfigValue({
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
                  setActiveFileConfigValue({
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
                  setActiveFileConfigValue({
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
          innerText="Layers"
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
            if (!options.reusable) {
              setNodes([
                ...nodes,
                {
                  id: getNodeId("LayerNode", elementID),
                  position: {
                    x: -currentViewport.x,
                    y: -currentViewport.y,
                    zoom: currentViewport.zoom,
                  },
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
                    elementID,
                  },
                },
              ]);
            } else {
              setNodes([
                ...nodes,
                {
                  id: getNodeId("ReuseNode", elementID),
                  position: {
                    x: -currentViewport.x,
                    y: -currentViewport.y,
                    zoom: currentViewport.zoom,
                  },
                  type: "ReuseNode",
                  data: {
                    name: layers[elementID].displayName,
                    trained: false,
                    usingPrevWeights: false,
                    hyperparams: layers[elementID].defaultHyperparams,
                    commentText: "",
                    commentType: "plain",
                    reuseCount: 2,
                    inputHandles: layers[elementID].defaultInputHandles,
                    outputHandles: layers[elementID].defaultOutputHandles,
                    elementID,
                  },
                },
              ]);
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
                  hyperparams: [{ id: "input_shape", value: null }],
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
        <H1Button
          show
          innerText="Add a Named Packer"
          onClick={() => {
            setNodes([
              ...nodes,
              {
                id: getNodeId("PackerNode"),
                position: currentViewport,
                type: "NamedPackerNode",
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
          innerText="Add an Named Unpacker"
          onClick={() => {
            setNodes([
              ...nodes,
              {
                id: getNodeId("UnpackerNode"),
                position: currentViewport,
                type: "NamedUnpackerNode",
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
          innerText="Add a CallBack Node"
          onClick={() => {
            const currentNodeID = getNodeId("CallBackNode");
            setNodes([
              ...nodes,
              {
                id: currentNodeID,
                position: currentViewport,
                data: {
                  
                },
                type: "CallBackNode",
              },
            ]);
          }}
        />
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
