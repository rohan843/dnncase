import classNames from "classnames";
import { find } from "lodash";
import { Handle, Position } from "reactflow";

const InputNode = ({
  data: { hyperparams, onActivate, onActivateAndShowInPane },
  selected,
}) => {
  const inputShape = find(
    hyperparams,
    (hyperparam) => hyperparam.id === "inputShape"
  ).value;
  return (
    <div
      style={{ padding: "0px 0px 0px 30px" }}
      onClick={() => {
        onActivate && onActivate();
      }}
      onDoubleClick={() => {
        onActivateAndShowInPane && onActivateAndShowInPane();
      }}
    >
      <div
        style={{
          width: "200px",
          border: "2px solid",
          height: "100px",
          borderRadius: "0px 100px 100px 0px",
        }}
        className={classNames({
          "border-black": selected,
          "border-darker": !selected,
        })}
      >
        <div style={{ padding: "10px" }}>Input Node</div>
        <div style={{ padding: "10px" }}>{JSON.stringify(inputShape)}</div>
        <Handle type="source" position={Position.Right} />
      </div>
    </div>
  );
};

export default InputNode;
