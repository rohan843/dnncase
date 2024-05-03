import classNames from "classnames";
import { find } from "lodash";
import { Handle, Position } from "reactflow";

const InputNode = ({
  data: { hyperparams, onActivate, onActivateAndShowInPane },
  selected,
}) => {
  const inputShape = find(
    hyperparams,
    (hyperparam) => hyperparam.id === "input_shape"
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
          height: "100px",
          borderRadius: "0px 100px 100px 0px",
        }}
        className={classNames("bg-[#F0A30A] border flex flex-col", {
          "border-black": selected,
          "border-[#BD7000]": !selected,
        })}
      >
        <div style={{ padding: "10px" }} className="text-xl grow ">
          Array Input
        </div>
        <div style={{ padding: "10px" }} className="text-xs font-mono w-[90%] truncate">
          Shape: {(inputShape && JSON.stringify(inputShape)) || "N/A"}
        </div>
        <Handle type="source" id="out" position={Position.Right} />
      </div>
    </div>
  );
};

export default InputNode;
