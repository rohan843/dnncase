import { NodeToolbar } from "reactflow";

function IncrDecrToolbar({ label, onIncrement, onDecrement, position }) {
  return (
    <NodeToolbar position={position}>
      <div>
        <p>{label}</p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    </NodeToolbar>
  );
}

export default IncrDecrToolbar;
