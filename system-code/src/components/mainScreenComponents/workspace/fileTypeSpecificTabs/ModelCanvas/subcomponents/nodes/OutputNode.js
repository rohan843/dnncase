import { Handle } from "reactflow";

const OutputNode = ({ data: { outputShape } }) => {
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
        <div style={{ padding: "10px" }}>Output Node</div>
        <div style={{ padding: "10px" }}>{outputShape}</div>
        <Handle type="target" />
      </div>
    </div>
  );
};

export default OutputNode;
