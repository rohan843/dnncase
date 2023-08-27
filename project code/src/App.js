import Top from "./components/Top";
import Bottom from "./components/Bottom";
import Left from "./components/Left";
import Right from "./components/Right";
import GraphCanvas from "./components/GraphCanvas";
import { useState } from "react";

function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const handleNodeInsert = () => {
    setNodes([
      ...nodes,
      { data: { label: "newNode" }, id: new Date().getTime() % 1000, position: { x: 0, y: 0 } },
    ]);
  };

  const handleNodeDelete = (nodeId) => {
    setNodes(
      nodes.filter((node) => {
        return node.id !== nodeId;
      })
    );
  };

  return (
    <div>
      <Top />
      <Bottom>
        <Left>
          <button onClick={handleNodeInsert}>Add new node</button>
        </Left>
        <GraphCanvas
          nodes={nodes}
          edges={edges}
          onEntityDelete={handleNodeDelete}
        />
        <Right />
      </Bottom>
    </div>
  );
}

export default App;
