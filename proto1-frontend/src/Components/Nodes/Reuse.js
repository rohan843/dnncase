import { Handle, Position } from "reactflow";

function Reuse({ data }) {
  const { reuseCount } = data;
  const handles = [];

  const height = reuseCount * 16;

  for (let i = 0; i < reuseCount; i++) {
    handles.push(
      <Handle
        id={`i${i}`}
        key={`i${i}`}
        type="target"
        position={Position.Left}
        style={{ top: 16 * i + 10 }}
      />
    );
  }

  for (let i = 0; i < reuseCount; i++) {
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
    <div className="node" style={{ height: height }}>
      <div>Reuse (applied to 'Layer')</div>
      {handles}
    </div>
  );
}

export default Reuse;
