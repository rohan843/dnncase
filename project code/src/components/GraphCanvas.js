import { useState } from "react";
import {
  GraphInput,
  Layer,
  EmbeddingLayer,
  GraphOutput,
  Repeater,
  Reuse,
} from "./graph_nodes/AllCustomNodes";
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
  embedding_layer:EmbeddingLayer,
  graphoutput: GraphOutput,
  repeater: Repeater,
  reuse: Reuse,
};


function GraphCanvas({ nodes, edges, setNodes, setEdges,setRight }) {
  const [text, setText] = useState("success");

  function setright(val){
    setRight(val);
  }

  const onNodesChange = (changes) => {
    setright(changes[0].id);
    console.log(changes);
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
