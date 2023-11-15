import { Handle, Position } from "reactflow";

const InputNode = ({ data: { inputShape } }) => {
  return (
    <div style={{ padding: "0px 0px 0px 30px" }}>
      <div
        style={{
          width: "200px",
          border: "2px solid",
          height: "100px",
          borderRadius: "0px 100px 100px 0px",
        }}
      >
        <div style={{ padding: "10px" }}>Input Node</div>
        <div style={{ padding: "10px" }}>{inputShape}</div>
        <Handle type="source" position={Position.Right} />
      </div>
    </div>
  );
};

export default InputNode;
