import classNames from "classnames";
import { Position } from "reactflow";
import SingleConnectionHandle from "./SingleConnectionHandle";

const colors = ["green", "orange"];

function BaseNode({
  inputCount,
  outputCount,
  children,
  className,
  repetitionCount,
}) {
  // Placing these in case either prop is null.
  if (!inputCount) inputCount = 0;
  if (!outputCount) outputCount = 0;
  if (!repetitionCount) repetitionCount = 1;

  const handles = [];

  const height = Math.max(inputCount, outputCount) * repetitionCount * 16;

  for (let i = 0; i < repetitionCount; i++) {
    for (let j = 0; j < inputCount; j++) {
      const overallCountOfInputHandle = j + i * inputCount;
      const curId = `i${j}g${i}`;
      handles.push(
        <SingleConnectionHandle
          id={curId}
          key={curId}
          type="target"
          position={Position.Left}
          style={{
            top: 16 * overallCountOfInputHandle + 5,
            backgroundColor: colors[i % 2],
          }}
        />
      );
    }
    for (let j = 0; j < outputCount; j++) {
      const overallCountOfOutputHandle = j + i * outputCount;
      const curId = `o${j}g${i}`;
      handles.push(
        <SingleConnectionHandle
          id={curId}
          key={curId}
          type="source"
          position={Position.Right}
          style={{
            top: 16 * overallCountOfOutputHandle + 5,
            backgroundColor: colors[i % 2],
          }}
        />
      );
    }
  }

  return (
    <div className={classNames("node", className)} style={{ height }}>
      <div>{children}</div>
      {handles}
    </div>
  );
}

export default BaseNode;
