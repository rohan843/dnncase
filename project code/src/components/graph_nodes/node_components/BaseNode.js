import classNames from "classnames";
import { Position, NodeToolbar } from "reactflow";
import SingleConnectionHandle from "./SingleConnectionHandle";

// TODO 1: Add functionality to allow increase/decrease in input/output handles, i.e., the NodeToolbar functionality
// TODO 2: Make the toolbar functionality more tuned for repeater and reuse block and remove it for layers later.

function BaseNode({
  inputCount,
  outputCount,
  children,
  className,
  showInputCountManipulationButtons,
  showOutputCountManipulationButtons,
}) {
  // Placing these in case either prop is null.
  if (!inputCount) inputCount = 0;
  if (!outputCount) outputCount = 0;

  const handles = [];
  const toolbar = (showOutputCountManipulationButtons ||
    showInputCountManipulationButtons) && (
    <NodeToolbar position={Position.Bottom}>
      {showInputCountManipulationButtons && (
        <div>
          <p>Input</p>
          <button>+</button>
          <button>-</button>
        </div>
      )}
      {showOutputCountManipulationButtons && (
        <div>
          <p>Output</p>
          <button>+</button>
          <button>-</button>
        </div>
      )}
    </NodeToolbar>
  );

  const height = Math.max(inputCount, outputCount) * 16;

  for (let i = 0; i < inputCount; i++) {
    handles.push(
      <SingleConnectionHandle
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
      <SingleConnectionHandle
        id={`o${i}`}
        key={`o${i}`}
        type="source"
        position={Position.Right}
        style={{ top: 16 * i + 5 }}
      />
    );
  }

  return (
    <div className={classNames("node", className)} style={{ height }}>
      <div>{children}</div>
      {handles}
      {toolbar}
    </div>
  );
}

export default BaseNode;
