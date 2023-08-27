import classNames from "classnames";
import { Handle, Position } from "reactflow";

function BaseNode({ inputCount, outputCount, children, className }) {
  // Placing these in case either prop is null.
  if (!inputCount) inputCount = 0;
  if (!outputCount) outputCount = 0;

  const handles = [];

  const height = Math.max(inputCount, outputCount) * 16;

  for (let i = 0; i < inputCount; i++) {
    handles.push(
      <Handle
        id={`i${i}`}
        key={`i${i}`}
        type="target"
        position={Position.Left}
        style={{ top: 16 * i + 5 }}
      />
    );
  }

  for (let i = 0; i < outputCount; i++) {
    handles.push(
      <Handle
        id={`o${i}`}
        key={`o${i}`}
        type="source"
        position={Position.Right}
        style={{ top: 16 * i + 5 }}
      />
    );
  }

  return (
    <div className={classNames("node", className)} style={{ height: height }}>
      <div>{children}</div>
      {handles}
    </div>
  );
}

export default BaseNode;
