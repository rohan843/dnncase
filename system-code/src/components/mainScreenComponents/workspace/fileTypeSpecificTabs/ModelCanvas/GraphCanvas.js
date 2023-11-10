import { useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  addEdge,
  useEdgesState,
  useNodesState,
  BackgroundVariant,
} from "reactflow";
import "reactflow/dist/style.css";
import { Layer } from "./subcomponents/nodes";

const NodeTypes = {
  LayerNode: Layer,
};

const initialNodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: { label: "1" },
    type: "LayerNode",
  },
];

function GraphCanvas() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
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
      </ReactFlow>
    </div>
  );
}

export default GraphCanvas;
