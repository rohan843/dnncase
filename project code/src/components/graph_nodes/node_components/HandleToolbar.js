import { NodeToolbar, Position } from "reactflow";

function HandleToolbar({ label, onIncrement, onDecrement }) {
  return (
    <NodeToolbar position={Position.Top}>
      <div>
        <p>{label}</p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    </NodeToolbar>
  );
}

export default HandleToolbar;
