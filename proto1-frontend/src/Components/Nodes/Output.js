import { Handle, Position } from "reactflow";

function Output({ data }) {
  return (
    <>
      <div>Output</div>
      <Handle type="target" position={Position.Left} id="o0" />
    </>
  );
}

export default Output;
