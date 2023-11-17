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
import { findIndex } from "lodash";

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
  const { activeFileType, nodes, edges } = useSelector((store) => {
    return {
      activeFileType: store.filesystem.fsState[activeFileIndex].data.filetype,
      nodes: store.filesystem.fsState[activeFileIndex].data.nodes,
      edges: store.filesystem.fsState[activeFileIndex].data.edges.map(
        (edge) => {
          return {
            ...edge,
            animated: true,
            style: { stroke: "#000", strokeWidth: 1.5 },
          };
        }
      ),
    };
  });
  const config = useSelector((store) => store.viewConfig[activeFileIndex]);
  const currentViewport = config.graphCanvas.viewport;
  const layers = getHierarchicalLayersFormat(
    useSelector((store) => store.artefacts.layers)
  );
  if (!config) {
    // TODO: Add code here to setup config to a value from backend (default config for this file type).
    // https://tushar-balar-27618.medium.com/how-to-use-async-await-in-the-functional-component-react-js-15d0fa9137d3
  }

  if (!permissibleFileTypes[activeFileType]) return null;

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

  const onEdgeCreation = (newEdgeData) =>
    setEdges([
      ...edges,
      {
        id: `e${Date.now()}`,
        source: newEdgeData.source,
        sourceHandle: newEdgeData.sourceHandle,
        target: newEdgeData.target,
        targetHandle: newEdgeData.targetHandle,
      },
    ]);

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
            enableNewKeyValueInput
            onNewKeyValueInputSubmit={(key, value) => {
              alert(`${key}: ${value}`);
            }}
            onCancel={() => {
              alert("Cancelled");
            }}
            onAdd={() => {
              alert("add");
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
                setValuesAtPaths({
                  fileIndex: activeFileIndex,
                  editPoints: [
                    {
                      path: ["rightPane", "comment", "markdownEditsEnabled"],
                      value: false,
                    },
                  ],
                })
              );
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
            editsEnabled={config.rightPane.comment.markdownEditsEnabled}
            onEditsToggle={() => {
              dispatch(
                setValueAtPath({
                  fileIndex: activeFileIndex,
                  path: ["rightPane", "comment", "markdownEditsEnabled"],
                  value: !config.rightPane.comment.markdownEditsEnabled,
                })
              );
            }}
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
                setValuesAtPaths({
                  fileIndex: activeFileIndex,
                  editPoints: [
                    {
                      path: ["rightPane", "comment", "markdownEditsEnabled"],
                      value: false,
                    },
                  ],
                })
              );
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
  const rightPaneContents = getRightPaneContents(activeNode, activeFileType);

  return (
    <div className="h-full w-full background-lighter relative overflow-hidden">
      {/* 
      
      onToggleTODOStatus: () => {
                    const newNodes = nodes.map((node) => {
                      if (node.id !== currentNodeID) {
                        return node;
                      } else {
                        node.isCommentTODO = !node.isCommentTODO;
                        return node;
                      }
                    });
                    setNodes(newNodes);
                  }

      */}
      <GraphCanvas
        NodeTypes={NodeTypes}
        edges={edges}
        nodes={nodes}
        onNodesChange={(newNodes) => setNodes(newNodes)}
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
          contents={layers}
          onSelect={(elementID, options) => {
            alert(`${elementID}, ${JSON.stringify(options)}`);
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
