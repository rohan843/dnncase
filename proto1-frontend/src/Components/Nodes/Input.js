import { Handle, Position } from "reactflow";

function Input({ data }) {
  return (
    <>
      <div>Input</div>
      <Handle type="source" position={Position.Right} id="0" />
    </>
  );
}

export default Input;
