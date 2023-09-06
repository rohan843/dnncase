import Top from "./components/Top";
import Bottom from "./components/Bottom";
import Left from "./components/Left";
import Right from "./components/Right";
import GraphCanvas from "./components/GraphCanvas";
import { useState } from "react";

function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const handleNodeInsert = (
    type,
    typeAppropriateInputOutputCount,
    hyperparameters
  ) => {
    setNodes([
      ...nodes,
      {
        data: {
          label: "newNode",
          setNodes,
          ...typeAppropriateInputOutputCount,
          hyperparameters: hyperparameters,
        },
        id: (new Date().getTime() % 10000).toString(),
        position: { x: 0, y: 0 },
        type,
      },
    ]);
  };
  function download(content, fileName, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }

  function onDownload() {
    const nodes1 = nodes.map((node) => {
      if (node.type === "layer") {
        return {
          id: node.id,
          type: node.type,
          inputCount: node.data.inputCount,
          outputCount: node.data.outputCount,
        };
      } else if (node.type === "reuse") {
        return {
          id: node.id,
          type: node.type,
          inputCount: 1,
          outputCount: 1,
        };
      } else if (node.type === "graphinput") {
        return {
          id: node.id,
          type: node.type,
          inputCount: 0,
          outputCount: 1,
        };
      } else if (node.type === "graphoutput") {
        return {
          id: node.id,
          type: node.type,
          inputCount: 1,
          outputCount: 0,
        };
      } else if (node.type === "repeater") {
        return {
          id: node.id,
          type: node.type,
          inputCount: 1,
          outputCount: node.data.outputCount,
        };
      } else {
        return {};
      }
    });
    const edges1 = edges.map((edge) => {
      return {
        sourceNode: edge.source,
        sourceNodeHandle: parseInt(edge.sourceHandle.substring(1), 10),
        targetNode: edge.target,
        targetNodeHandle: parseInt(edge.targetHandle.substring(1), 10),
      };
    });
    const res = { nodes: nodes1, edges: edges1 };
    download(JSON.stringify(res), "graph.json", "text/plain");
  }
  const [text, setText] = useState("No Hyper Parameters");

  function setRight(val) {
    setText(val);
  }

  return (
    <div>
      <Top />
      <Bottom>
        <Left>
          <button
            onClick={() => {
              onDownload();
            }}
          >
            Download
          </button>
          <button
            onClick={() => {
              handleNodeInsert("graphinput");
            }}
          >
            Add new input node
          </button>
          <button
            onClick={() => {
              handleNodeInsert("layer", { inputCount: 1, outputCount: 1 });
            }}
          >
            Add new layer node
          </button>
          <button
            onClick={() => {
              handleNodeInsert(
                "embedding_layer",
                { inputCount: 1, outputCount: 1 },
                {
                  input_dim: 1,
                  output_dim: 1,
                  embeddings_initializer: "uniform",
                  embeddings_regularizer: "None",
                  activity_regularizer: "None",
                  embeddings_constraint: "None",
                  mask_zero: false,
                  input_length: "None",
                  sparse: false,
                }
              );
            }}
          >
            Add new Embedding layer node
          </button>
          <button
            onClick={() => {
              handleNodeInsert("graphoutput");
            }}
          >
            Add new output node
          </button>
          <button
            onClick={() => {
              handleNodeInsert("repeater", { outputCount: 2 });
            }}
          >
            Add new repeater node
          </button>
          <button
            onClick={() => {
              handleNodeInsert("reuse", {
                inputCount: 2,
                outputCount: 3,
                reuseCount: 2,
              });
            }}
          >
            Add new reuse node
          </button>
        </Left>
        <GraphCanvas
          nodes={nodes}
          edges={edges}
          setEdges={setEdges}
          setNodes={setNodes}
          setRight={setRight}
        />
        <Right text={text} nodes={nodes} />
      </Bottom>
    </div>
  );
}

export default App;
