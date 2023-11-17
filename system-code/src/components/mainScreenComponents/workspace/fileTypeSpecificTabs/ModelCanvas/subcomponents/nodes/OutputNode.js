import classNames from "classnames";
import { find } from "lodash";
import { Handle, Position } from "reactflow";

const OutputNode = ({ data: { hyperparams }, selected }) => {
  const outputShape = find(
    hyperparams,
    (hyperparam) => hyperparam.id === "outputShape"
  ).value;
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
        <div style={{ padding: "10px" }}>{JSON.stringify(outputShape)}</div>
        <Handle type="target" position={Position.Left} />
      </div>
    </div>
  );
};

export default OutputNode;
