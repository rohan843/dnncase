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
import { useEdgesState, useNodesState } from "reactflow";

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

function ModelCanvas({ activeFileIndex }) {
  const dispatch = useDispatch();
  const activeFileType = useSelector(
    (store) => store.filesystem.fsState[activeFileIndex].data.filetype
  );
  const config = useSelector((store) => store.viewConfig[activeFileIndex]);
  if (!config) {
    // TODO: Add code here to setup config to a value from backend (default config for this file type).
  }

  // eslint-disable-next-line no-unused-vars
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onEdgeCreation = (params) =>
    setEdges((edges) => [
      ...edges,
      {
        id: `e${edges.length}`,
        source: params.source,
        sourceHandle: params.sourceHandle,
        target: params.target,
        targetHandle: params.targetHandle,
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
