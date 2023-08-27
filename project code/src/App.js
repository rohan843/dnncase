import Top from "./components/Top";
import Bottom from "./components/Bottom";
import Left from "./components/Left";
import Right from "./components/Right";
import GraphCanvas from "./components/GraphCanvas";
import { useState } from "react";

function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const handleNodeInsert = (type) => {
    setNodes([
      ...nodes,
      {
        data: {
          label: "newNode",
          inputCount: 2,
          outputCount: 2,
          reuseCount: 2,
        },
        id: (new Date().getTime() % 10000).toString(),
        position: { x: 0, y: 0 },
        type,
      },
    ]);
  };

  return (
    <div>
      <Top />
      <Bottom>
        <Left>
          <button
            onClick={() => {
              handleNodeInsert("graphinput");
            }}
          >
            Add new input node
          </button>
          <button
            onClick={() => {
              handleNodeInsert("layer");
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
              handleNodeInsert("repeater");
            }}
          >
            Add new repeater node
          </button>
          <button
            onClick={() => {
              handleNodeInsert("reuse");
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
