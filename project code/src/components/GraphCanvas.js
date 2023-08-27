import ReactFlow, { Background, Controls, MiniMap } from "reactflow";

import "reactflow/dist/style.css";

function GraphCanvas({
  nodes,
  edges,
  onEntityDelete,
  onReusedLayerDelete,
  onReusedLayerInsert,
  onEdgeInsert,
  onEntitySelect,
  onReuseConnectionCountChange,
  onRepeaterConnectionCountChange,
  onNodesMove,
}) {
  const nodeListThatCanBeRendered = nodes;
  const edgeListThatCanBeRendered = edges;

  console.log(nodeListThatCanBeRendered);

  return (
    <div style={{ height: "87.5vh", width: "70vw", border: "1px solid black" }}>
      <ReactFlow nodes={nodeListThatCanBeRendered} edges={edgeListThatCanBeRendered}>
        <Background />
        <Controls />
        <MiniMap zoomable pannable />
      </ReactFlow>
    </div>
  );
}

export default GraphCanvas;
