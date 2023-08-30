import Top from "./components/Top";
import Bottom from "./components/Bottom";
import Left from "./components/Left";
import Right from "./components/Right";
import GraphCanvas from "./components/GraphCanvas";
import { useState } from "react";

function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const handleNodeInsert = (type, typeAppropriateInputOutputCount) => {
    setNodes([
      ...nodes,
      {
        data: {
          label: "newNode",
          setNodes,
          ...typeAppropriateInputOutputCount,
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

  function onDownload(){
    const nodes1 = nodes.map(node => {
      return {
        id: node.id,
        type: node.type,
        inputCount: 0,
        outputCount: 1
      };
    });
    const edges1 = edges.map(edge =>{
      return {
        sourceNode: edge.source,
        sourceNodeHandle: edge.sourceHandle,
        targetNode: edge.target,
        targetNodeHandle: edge.targetHandle,
      };
    })
    download(JSON.stringify(nodes1), "yourfile.json", "text/plain");
    download(JSON.stringify(edges1), "yourfile.json", "text/plain");
  }

  return (
    <div>
      <Top />
      <Bottom>
        <Left>
          <button onClick={()=>{onDownload()}}>Download</button>
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
              handleNodeInsert("reuse", { reuseCount: 2 });
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
        />
        <Right />
      </Bottom>
    </div>
  );
}

export default App;
