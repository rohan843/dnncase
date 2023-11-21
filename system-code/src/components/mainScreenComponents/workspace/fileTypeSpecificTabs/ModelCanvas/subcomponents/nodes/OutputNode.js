import classNames from "classnames";
import { find } from "lodash";
import { Handle, Position } from "reactflow";

const OutputNode = ({
  data: { hyperparams, onActivate, onActivateAndShowInPane },
  selected,
}) => {
  const outputShape = find(
    hyperparams,
    (hyperparam) => hyperparam.id === "outputShape"
  ).value;
  return (
    <div
      style={{
        width: "200px",
        border: "2px solid",
        height: "100px",
        borderRadius: "100px 0px 0px 100px",
        textAlign: "right",
      }}
      className={classNames({
        "border-black": selected,
        "border-darker": !selected,
        "background-dark": true,
      })}
      onClick={() => {
        onActivate && onActivate();
      }}
      onDoubleClick={() => {
        onActivateAndShowInPane && onActivateAndShowInPane();
      }}
    >
      <div style={{ padding: "10px" }}>Output Node</div>
      <div style={{ padding: "10px" }}>{JSON.stringify(outputShape)}</div>
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default OutputNode;
