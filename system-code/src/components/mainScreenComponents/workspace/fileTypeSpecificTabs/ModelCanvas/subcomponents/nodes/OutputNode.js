import classNames from "classnames";
import { Handle, Position } from "reactflow";

const OutputNode = ({ data: { outputShape }, selected }) => {
  return (
    <div>
      <div
        style={{
          width: "200px",
          border: "2px solid",
          height: "100px",
          borderRadius: "100px 0px 0px 100px",
        }}
        className={classNames({
          "border-black": selected,
          "border-darker": !selected,
        })}
      >
        <div style={{ padding: "10px" }}>Output Node</div>
        <div style={{ padding: "10px" }}>{outputShape}</div>
        <Handle type="target" position={Position.Left} />
      </div>
    </div>
  );
};

export default OutputNode;
