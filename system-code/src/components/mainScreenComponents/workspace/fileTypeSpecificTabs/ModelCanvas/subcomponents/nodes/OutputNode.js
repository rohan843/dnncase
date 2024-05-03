import classNames from "classnames";
import { Handle, Position } from "reactflow";

const OutputNode = ({
  data: { hyperparams, onActivate, onActivateAndShowInPane },
  selected,
}) => {
  return (
    <div
      style={{
        width: "200px",
        height: "100px",
        borderRadius: "100px 0px 0px 100px",
        textAlign: "right",
      }}
      className={classNames(
        "bg-[#F0A30A] border flex flex-col justify-center items-center",
        {
          "border-black": selected,
          "border-[#BD7000]": !selected,
        }
      )}
      onClick={() => {
        onActivate && onActivate();
      }}
      onDoubleClick={() => {
        onActivateAndShowInPane && onActivateAndShowInPane();
      }}
    >
      <div style={{ padding: "10px" }} className="text-xl">
        Record Array Output
      </div>
      <Handle type="target" id="in" position={Position.Left} />
    </div>
  );
};

export default OutputNode;
