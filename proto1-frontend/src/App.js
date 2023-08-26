import React, { useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
import Input from "./Components/Nodes/Input";
import Output from "./Components/Nodes/Output";
import Layer from "./Components/Nodes/Layer";
import Repeater from "./Components/Nodes/Repeater";
import Reuse from "./Components/Nodes/Reuse";

import "reactflow/dist/style.css";

const nodeTypes = {
  input: Input,
  output: Output,
  layer: Layer,
  repeater: Repeater,
  reuse: Reuse
};

const initialNodes = [
  { id: "1", position: { x: 0, y: 100 }, type: "input" },
  { id: "2", position: { x: 100, y: 100 }, type: "output" },
  {
    id: "3",
    position: { x: 100, y: 100 },
    type: "layer",
    data: { inputCount: 2, outputCount: 3 },
  },
  {
    id: "4",
    position: { x: 200, y: 100 },
    type: "repeater",
    data: { outputCount: 5 },
  },
  {
    id: "5",
    position: { x: 300, y: 300 },
    type: "reuse",
    data: { reuseCount: 5 },
  },
];
const initialEdges = [];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
