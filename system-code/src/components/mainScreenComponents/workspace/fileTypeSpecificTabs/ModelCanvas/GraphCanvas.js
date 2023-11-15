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

const initialNodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: {
      name: "Conv2D Layer",
      activation: "relu",
      trained: false,
      usingPrevWeights: false,
      numInputNodes: 1,
      numOutputNodes: 1,
    },
    type: "LayerNode",
  },
  {
    id: "2",
    position: { x: 200, y: 200 },
    data: {
      name: "Conv2D Layer",
      activation: "relu",
      trained: false,
      usingPrevWeights: false,
      numInputNodes: 1,
      numOutputNodes: 1,
    },
    type: "LayerNode",
  },
  {
    id: "3",
    position: { x: 0, y: 0 },
    data: {
      inputShape: "[26, 26]",
    },
    type: "InputNode",
  },
  {
    id: "4",
    position: { x: 300, y: 100 },
    data: {
      outputShape: "[1]",
    },
    type: "OutputNode",
  },
  {
    id: "5",
    position: { x: 0, y: 0 },
    data: {
      commentText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptates enim dolore eligendi cum aperiam iste fugit impedit qui cupiditate eius reprehenderit iusto ratione delectus, quam mollitia assumenda obcaecati rerum.",
    },
    type: "CommentNode",
  },
];

const initialEdges = [
  {
    id: "e1",
    source: "3",
    target: "1",
    targetHandle: "i0",
    animated: true,
    style: { stroke: "#fff" },
  },
  {
    id: "e2",
    source: "2",
    target: "4",
    sourceHandle: "o0",
    animated: true,
    style: { stroke: "#fff" },
  },
  {
    id: "e3",
    source: "1",
    target: "2",
    sourceHandle: "o0",
    targetHandle: "i0",
    animated: true,
    style: { stroke: "#fff" },
  },
];

/**
 * Used to display nodes on an infinite canvas.
 * @param {Object} param0
 * @param {{
 * nodeTypeName: ({}) => JSX.Element
 * }} param0.NodeTypes An object containing different types of nodes keyed by their string type.
 */
function GraphCanvas({ NodeTypes }) {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
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
