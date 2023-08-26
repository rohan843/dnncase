import { Handle, Position } from "reactflow";

function Layer({ data }) {
  const { inputCount, outputCount } = data;
  const handles = [];

  const height = Math.max(inputCount, outputCount) * 16;

  for (let i = 0; i < inputCount; i++) {
    handles.push(
      <Handle
        id={`i${i}`}
        key={`i${i}`}
        type="target"
        position={Position.Left}
        style={{top: 16*i + 10}}
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
        style={{top: 16*i + 5}}
      />
    );
  }

  return (
    <div className="node" style={{ height: height }}>
      <div>Layer</div>
      {handles}
    </div>
  );
}

export default Layer;
