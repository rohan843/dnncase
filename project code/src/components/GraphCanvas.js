import {
  GraphInput,
  Layer,
  GraphOutput,
  Repeater,
  Reuse,
} from "./Nodes/AllCustomNodes";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";

import "reactflow/dist/style.css";

const nodeTypes = {
  graphinput: GraphInput,
  layer: Layer,
  graphoutput: GraphOutput,
  repeater: Repeater,
  reuse: Reuse,
};

function GraphCanvas({ nodes, edges, setNodes, setEdges }) {
  const onNodesChange = (changes) => {
    setNodes((nodes) => applyNodeChanges(changes, nodes));
  };
  const onEdgesChange = (changes) => {
    setEdges((edges) => applyEdgeChanges(changes, edges));
  };

  const onConnect = (params) => {
    setEdges((eds) => addEdge(params, eds));
  };

  return (
    <div style={{ height: "87.5vh", width: "70vw", border: "1px solid black" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Background />
        <Controls />
        <MiniMap zoomable pannable />
      </ReactFlow>
    </div>
  );
}

export default GraphCanvas;
