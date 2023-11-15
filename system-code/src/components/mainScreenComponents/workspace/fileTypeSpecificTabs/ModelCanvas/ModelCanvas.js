// TODO: Make this and all its children stateless. Keep file-specific state in redux instead.

import RightPane from "./RightPane";
import LeftPane from "./LeftPane";
import GraphCanvas from "./GraphCanvas";
import { useDispatch, useSelector } from "react-redux";
import { setValueAtPath, setValuesAtPaths } from "../../../../../store";
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
import { includes } from "lodash";
import { useCallback, useState } from "react";

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

const initialNodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: {
      name: "Conv2D Layer",
      activation: "relu",
      trained: false,
      usingPrevWeights: false,
      numInputNodes: 1,
      numOutputNodes: 1,
    },
    type: "LayerNode",
  },
  {
    id: "2",
    position: { x: 200, y: 200 },
    data: {
      name: "Conv2D Layer",
      activation: "relu",
      trained: false,
      usingPrevWeights: false,
      numInputNodes: 1,
      numOutputNodes: 1,
    },
    type: "LayerNode",
  },
  {
    id: "3",
    position: { x: 0, y: 0 },
    data: {
      inputShape: "[26, 26]",
    },
    type: "InputNode",
  },
  {
    id: "4",
    position: { x: 300, y: 100 },
    data: {
      outputShape: "[1]",
    },
    type: "OutputNode",
  },
  {
    id: "5",
    position: { x: 0, y: 0 },
    data: {
      commentText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptates enim dolore eligendi cum aperiam iste fugit impedit qui cupiditate eius reprehenderit iusto ratione delectus, quam mollitia assumenda obcaecati rerum.",
    },
    type: "CommentNode",
  },
];

const initialEdges = [
  {
    id: "e1",
    source: "3",
    target: "1",
    targetHandle: "i0",
    animated: true,
    style: { stroke: "#fff" },
  },
  {
    id: "e2",
    source: "2",
    target: "4",
    sourceHandle: "o0",
    animated: true,
    style: { stroke: "#fff" },
  },
  {
    id: "e3",
    source: "1",
    target: "2",
    sourceHandle: "o0",
    targetHandle: "i0",
    animated: true,
    style: { stroke: "#fff" },
  },
];

function handleParentExpand(res, updateItem) {
  const parent = res.find((e) => e.id === updateItem.parentNode);

  if (parent) {
    const extendWidth = updateItem.position.x + updateItem.width - parent.width;
    const extendHeight =
      updateItem.position.y + updateItem.height - parent.height;

    if (
      extendWidth > 0 ||
      extendHeight > 0 ||
      updateItem.position.x < 0 ||
      updateItem.position.y < 0
    ) {
      parent.style = { ...parent.style } || {};

      parent.style.width = parent.style.width ?? parent.width;
      parent.style.height = parent.style.height ?? parent.height;

      if (extendWidth > 0) {
        parent.style.width += extendWidth;
      }

      if (extendHeight > 0) {
        parent.style.height += extendHeight;
      }

      if (updateItem.position.x < 0) {
        const xDiff = Math.abs(updateItem.position.x);
        parent.position.x = parent.position.x - xDiff;
        parent.style.width += xDiff;
        updateItem.position.x = 0;
      }

      if (updateItem.position.y < 0) {
        const yDiff = Math.abs(updateItem.position.y);
        parent.position.y = parent.position.y - yDiff;
        parent.style.height += yDiff;
        updateItem.position.y = 0;
      }

      parent.width = parent.style.width;
      parent.height = parent.style.height;
    }
  }
}

function applyChanges(changes, elements) {
  // we need this hack to handle the setNodes and setEdges function of the useReactFlow hook for controlled flows
  if (changes.some((c) => c.type === "reset")) {
    return changes.filter((c) => c.type === "reset").map((c) => c.item);
  }
  const initElements = changes
    .filter((c) => c.type === "add")
    .map((c) => c.item);

  return elements.reduce((res, item) => {
    const currentChanges = changes.filter((c) => c.id === item.id);

    if (currentChanges.length === 0) {
      res.push(item);
      return res;
    }

    const updateItem = { ...item };

    for (const currentChange of currentChanges) {
      if (currentChange) {
        switch (currentChange.type) {
          case "select": {
            updateItem.selected = currentChange.selected;
            break;
          }
          case "position": {
            if (typeof currentChange.position !== "undefined") {
              updateItem.position = currentChange.position;
            }

            if (typeof currentChange.positionAbsolute !== "undefined") {
              updateItem.positionAbsolute = currentChange.positionAbsolute;
            }

            if (typeof currentChange.dragging !== "undefined") {
              updateItem.dragging = currentChange.dragging;
            }

            if (updateItem.expandParent) {
              handleParentExpand(res, updateItem);
            }
            break;
          }
          case "dimensions": {
            if (typeof currentChange.dimensions !== "undefined") {
              updateItem.width = currentChange.dimensions.width;
              updateItem.height = currentChange.dimensions.height;
            }

            if (typeof currentChange.updateStyle !== "undefined") {
              updateItem.style = {
                ...(updateItem.style || {}),
                ...currentChange.dimensions,
              };
            }

            if (typeof currentChange.resizing === "boolean") {
              updateItem.resizing = currentChange.resizing;
            }

            if (updateItem.expandParent) {
              handleParentExpand(res, updateItem);
            }
            break;
          }
          case "remove": {
            return res;
          }
          default:
        }
      }
    }

    res.push(updateItem);
    return res;
  }, initElements);
}

function ModelCanvas({ activeFileIndex }) {
  const dispatch = useDispatch();
  const activeFileType = useSelector(
    (store) => store.filesystem.fsState[activeFileIndex].data.filetype
  );
  const config = useSelector((store) => store.viewConfig[activeFileIndex]);
  if (!config) {
    // TODO: Add code here to setup config to a value from backend (default config for this file type).
  }

  const [nodes, setNodes] = useState(initialNodes);
  const onNodesChange = useCallback(
    (changes) => setNodes((items) => applyChanges(changes, items)),
    []
  );

  const [edges, setEdges] = useState(initialEdges);
  const onEdgesChange = useCallback(
    (changes) => setEdges((items) => applyChanges(changes, items)),
    []
  );

  const onEdgeCreation = (newEdgeData) =>
    setEdges([
      ...edges,
      {
        id: `e${Date.now()}`,
        source: newEdgeData.source,
        sourceHandle: newEdgeData.sourceHandle,
        target: newEdgeData.target,
        targetHandle: newEdgeData.targetHandle,
        animated: true,
        style: { stroke: "#fff" },
      },
    ]);

  if (!permissibleFileTypes[activeFileType]) return null;

  return (
    <div className="h-full w-full background-lighter relative overflow-hidden">
      <GraphCanvas
        NodeTypes={NodeTypes}
        edges={edges}
        nodes={nodes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onEdgeCreation={onEdgeCreation}
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
            // toggle config.lefPane.layerSelector.show
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
          contents={
            // TODO: Get this from an artefactSlice.
            {
              root: {
                index: "root",
                isFolder: true,
                children: ["word-embeddings", "convolutional"],
                data: {},
              },
              "word-embeddings": {
                index: "word-embeddings",
                isFolder: true,
                children: ["embedding"],
                data: { name: "Word Embedding" },
              },
              embedding: {
                index: "embedding",
                isFolder: false,
                data: {
                  name: "Embedding Layer",
                },
              },
              convolutional: {
                index: "convolutional",
                isFolder: true,
                children: [
                  "conv2d",
                  "deconv2d",
                  "alongnameddeconv2dlayerwithasuperlooooongnamedeconv2d",
                ],
                data: { name: "Convolutional Layers" },
              },
              conv2d: {
                index: "conv2d",
                isFolder: false,
                data: {
                  name: "Conv2D Layer",
                },
              },
              deconv2d: {
                index: "deconv2d",
                isFolder: false,
                data: {
                  name: "DeConv2D Layer",
                },
              },
              alongnameddeconv2dlayerwithasuperlooooongnamedeconv2d: {
                index: "alongnameddeconv2dlayerwithasuperlooooongnamedeconv2d",
                isFolder: false,
                data: {
                  name: "ALongNamedDeconv2DLayerWithASuperLooooongNameDeconv2D Layer",
                },
              },
            }
          }
          onSelect={(elementID, options) => {
            alert(`${elementID}, ${JSON.stringify(options)}`);
          }}
        />
        <H1Button show innerText="Add a Packer" onClick={() => {}} />
        <H1Button show innerText="Add a Repeater" onClick={() => {}} />
        <H1Button show innerText="Activations" onClick={() => {}} />
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
        {/* Title */}
        <Title show innerText="Conv2D Layer" />

        {/* Arguments Table */}
        <H show level={1} innerText="Arguments" />
        <KeyValue
          show
          content={[
            {
              keyInnerText: "Demo Parameter 1",
              valueInnerText: 25,
              isValueEditable: true,
              removable: false,
              onValueChange: (newValue) => {
                console.log(newValue);
              },
            },
            {
              keyInnerText: "Demo Parameter 2",
              valueInnerText:
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaa",
              isValueEditable: false,
              removable: false,
            },
            {
              keyInnerText: "Demo Parameter 3",
              valueInnerText: 25,
              isValueEditable: true,
              removable: true,
              onRemove: () => {
                alert("removed!");
              },
              onValueChange: (newValue) => {
                console.log(newValue);
              },
            },
            {
              keyInnerText: "A very long Demo Parameter 4",
              valueInnerText: 25,
              isValueEditable: false,
              removable: true,
            },
            {
              keyInnerText: "Demo Parameter 5",
              valueInnerText:
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              isValueEditable: true,
              removable: true,
              onValueChange: (newValue) => {
                console.log(newValue);
              },
            },
            {
              keyInnerText: "Demo Parameter 6",
              valueInnerText: 25,
              isValueEditable: false,
              removable: true,
            },
            {
              keyInnerText: "Demo Parameter 7",
              valueInnerText: 25,
              isValueEditable: true,
              removable: true,
              onValueChange: (newValue) => {
                console.log(newValue);
              },
            },
            {
              keyInnerText:
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              valueInnerText: 25,
              isValueEditable: false,
              removable: true,
            },
            {
              keyInnerText: "Demo Parameter 9",
              valueInnerText: 25,
              isValueEditable: true,
              removable: true,
              onValueChange: (newValue) => {
                console.log(newValue);
              },
            },
            {
              keyInnerText: "Demo Parameter 10",
              valueInnerText: 25,
              isValueEditable: false,
              removable: true,
            },
            {
              keyInnerText: "Demo Parameter 11",
              valueInnerText: 25,
              isValueEditable: false,
              removable: true,
            },
          ]}
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
          show={config.rightPane.comment.type === "plain"}
          innerText={config.rightPane.comment.text}
          onChange={(newValue) => {
            dispatch(
              setValueAtPath({
                fileIndex: activeFileIndex,
                path: ["rightPane", "comment", "text"],
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
                    path: ["rightPane", "comment", "type"],
                    value: "markdown",
                  },
                  {
                    path: ["rightPane", "comment", "markdownEditsEnabled"],
                    value: false,
                  },
                ],
              })
            );
          }}
        />
        <Markdown
          show={config.rightPane.comment.type === "markdown"}
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
          innerText={config.rightPane.comment.text}
          onChange={(newValue) => {
            dispatch(
              setValueAtPath({
                fileIndex: activeFileIndex,
                path: ["rightPane", "comment", "text"],
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
                    path: ["rightPane", "comment", "type"],
                    value: "plain",
                  },
                  {
                    path: ["rightPane", "comment", "markdownEditsEnabled"],
                    value: false,
                  },
                ],
              })
            );
          }}
        />
      </RightPane>
    </div>
  );
}

export default ModelCanvas;
