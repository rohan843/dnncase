import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
  useOnViewportChange,
} from "reactflow";
import "reactflow/dist/style.css";

function ViewportChangeLogger({ onViewportChange }) {
  useOnViewportChange({
    onEnd: (viewport) => {
      onViewportChange && onViewportChange(viewport);
    },
  });

  return null;
}

/**
 * Used to display nodes on an infinite canvas.
 * @param {Object} param0
 * @param {{
 * nodeTypeName: ({}) => JSX.Element
 * }} param0.NodeTypes An object containing different types of nodes keyed by their string type.
 */
function GraphCanvas({
  NodeTypes,
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onEdgeCreation,
  onViewportChange,
}) {
  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={(p) => {
          onNodesChange(p);
        }}
        onEdgesChange={(p) => {
          onEdgesChange(p);
        }}
        onConnect={(newEdgeData) => {
          onEdgeCreation(newEdgeData);
        }}
        nodeTypes={NodeTypes}
        snapToGrid
        snapGrid={[5, 5]}
      >
        <Controls className="opacity-60 hover:opacity-100 bg-white" />
        <MiniMap pannable zoomable className="opacity-80 hover:opacity-100" />
        <Background
          id="1"
          gap={10}
          lineWidth={0.5}
          color="#ccc"
          variant={BackgroundVariant.Lines}
        />
        <Background
          id="2"
          gap={100}
          lineWidth={0.5}
          color="#aaa"
          variant={BackgroundVariant.Lines}
        />
        <ViewportChangeLogger onViewportChange={onViewportChange} />
      </ReactFlow>
    </div>
  );
}

export default GraphCanvas;
