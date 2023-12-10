import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
  useOnViewportChange,
  getSimpleBezierPath,
  Position,
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

function ConnectionLine({ fromX, fromY, toX, toY }) {
  return (
    <g>
      <path
        fill="none"
        stroke="#000"
        strokeWidth={1.5}
        className="animated"
        d={
          getSimpleBezierPath({
            sourceX: fromX,
            sourceY: fromY,
            sourcePosition: Position.Right,
            targetX: toX,
            targetY: toY,
            targetPosition: Position.Left,
          })[0]
        }
      />
      <circle
        cx={toX}
        cy={toY}
        fill="#00000000"
        r={3}
        stroke="#000"
        strokeWidth={1.5}
      />
    </g>
  );
}

/**
 * Takes in a react-flow style list of changes. And a list of elements (nodes or edges). Applies the
 * changes to the elements and returns the result. Note that the returned result is a _completely
 * deep copied_ result.
 *
 * **NOTE**: This code has been adapted from the react-flow codebase.
 * @see https://github.com/xyflow/xyflow/blob/cc1d8ccadd73dac21f19b89f02fc687677e1780f/packages/react/src/utils/changes.ts#L45
 *
 * @param {Array} changes The array of changes.
 * @param {Array} elements The array of nodes or edges to which the changes need to be applied.
 * @returns {Array} The array of elements with changes applied to them.
 */
function applyChanges(changes, elements) {
  function handleParentExpand(res, updateItem) {
    const parent = res.find((e) => e.id === updateItem.parentNode);

    if (parent) {
      const extendWidth =
        updateItem.position.x + updateItem.width - parent.width;
      const extendHeight =
        updateItem.position.y + updateItem.height - parent.height;

      if (
        extendWidth > 0 ||
        extendHeight > 0 ||
        updateItem.position.x < 0 ||
        updateItem.position.y < 0
      ) {
        parent.style = { ...parent.style } || {};

        parent.style.width = parent.style.width ?? parent.width;
        parent.style.height = parent.style.height ?? parent.height;

        if (extendWidth > 0) {
          parent.style.width += extendWidth;
        }

        if (extendHeight > 0) {
          parent.style.height += extendHeight;
        }

        if (updateItem.position.x < 0) {
          const xDiff = Math.abs(updateItem.position.x);
          parent.position.x = parent.position.x - xDiff;
          parent.style.width += xDiff;
          updateItem.position.x = 0;
        }

        if (updateItem.position.y < 0) {
          const yDiff = Math.abs(updateItem.position.y);
          parent.position.y = parent.position.y - yDiff;
          parent.style.height += yDiff;
          updateItem.position.y = 0;
        }

        parent.width = parent.style.width;
        parent.height = parent.style.height;
      }
    }
  }

  // we need this hack to handle the setNodes and setEdges function of the useReactFlow hook for controlled flows
  if (changes.some((c) => c.type === "reset")) {
    return changes.filter((c) => c.type === "reset").map((c) => c.item);
  }
  const initElements = changes
    .filter((c) => c.type === "add")
    .map((c) => c.item);

  return elements.reduce((res, item) => {
    const currentChanges = changes.filter((c) => c.id === item.id);

    if (currentChanges.length === 0) {
      res.push(item);
      return res;
    }

    const updateItem = { ...item };

    for (const currentChange of currentChanges) {
      if (currentChange) {
        switch (currentChange.type) {
          case "select": {
            updateItem.selected = currentChange.selected;
            break;
          }
          case "position": {
            if (typeof currentChange.position !== "undefined") {
              updateItem.position = currentChange.position;
            }

            if (typeof currentChange.positionAbsolute !== "undefined") {
              updateItem.positionAbsolute = currentChange.positionAbsolute;
            }

            if (typeof currentChange.dragging !== "undefined") {
              updateItem.dragging = currentChange.dragging;
            }

            if (updateItem.expandParent) {
              handleParentExpand(res, updateItem);
            }
            break;
          }
          case "dimensions": {
            if (typeof currentChange.dimensions !== "undefined") {
              updateItem.width = currentChange.dimensions.width;
              updateItem.height = currentChange.dimensions.height;
            }

            if (typeof currentChange.updateStyle !== "undefined") {
              updateItem.style = {
                ...(updateItem.style || {}),
                ...currentChange.dimensions,
              };
            }

            if (typeof currentChange.resizing === "boolean") {
              updateItem.resizing = currentChange.resizing;
            }

            if (updateItem.expandParent) {
              handleParentExpand(res, updateItem);
            }
            break;
          }
          case "remove": {
            return res;
          }
          default:
        }
      }
    }

    res.push(updateItem);
    return res;
  }, initElements);
}

/**
 * Used to display nodes on an infinite canvas.
 * @param {Object} param0
 * @param {{
 *    nodeTypeName: ({}) => JSX.Element
 * }} param0.NodeTypes An object containing different types of nodes keyed by their string type.
 * @param {Array} param0.nodes An array of nodes.
 * @param {Array} param0.edges An array of edges.
 * @param {(newNodes: Array) => void} param0.onNodesChange When nodes change, a completely new nodes
 * array will be passed to this callback.
 * @param {(newEdges: Array) => void} param0.onEdgesChange When edges change, a completely new edges
 * array will be passed to this callback.
 * @param {(newEdgeData: {
 *    source: string,
 *    sourceHandle: string|null,
 *    target: string,
 *    targetHandle: string|null,
 * }) => void} param0.onEdgeCreation When a new edge is created, its source and target data
 * will be passed to this callback.
 * @param {(viewport: {
 *    x: number,
 *    y: number,
 *    zoom: number,
 * }) => void} param0.onViewportChange When the viewport changes, its coordinates and the
 * zoom level will be passed to this callback.
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
        onNodesChange={(changes) => {
          onNodesChange(applyChanges(changes, nodes));
        }}
        onEdgesChange={(changes) => {
          onEdgesChange(applyChanges(changes, edges));
        }}
        onConnect={(newEdgeData) => {
          onEdgeCreation(newEdgeData);
        }}
        nodeTypes={NodeTypes}
        snapToGrid
        snapGrid={[5, 5]}
        connectionLineComponent={ConnectionLine}
        minZoom={0.1}
        // TODO: Enable these when reactflow v12 is released (ref. https://github.com/xyflow/xyflow/blob/v11/README.md#-upcoming-changes)
        // viewport={{ x: 0, y: 0, zoom: 1 }}
        // onViewportChange={(v) => {
        //   console.log(v);
        //   onViewportChange(v);
        // }}
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
