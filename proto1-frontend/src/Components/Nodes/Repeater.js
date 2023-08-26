import { Handle, Position } from "reactflow";

function Repeater({ data }) {
  const { outputCount } = data;
  const handles = [];

  const height = outputCount * 16;

  handles.push(
    <Handle id="i0" key="i0" type="target" position={Position.Left} />
  );

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
    <div className="node" style={{ height: height }}>
      <div>Repeater</div>
      {handles}
    </div>
  );
}

export default Repeater;
