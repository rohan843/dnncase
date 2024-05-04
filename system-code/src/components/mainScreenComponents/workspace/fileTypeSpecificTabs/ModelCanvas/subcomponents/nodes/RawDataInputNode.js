import classNames from "classnames";
import { Handle, Position } from "reactflow";

const RawDataInputNode = ({
  data: { hyperparams, onActivate, onActivateAndShowInPane },
  selected,
}) => {
  return (
    <div
      onClick={() => {
        onActivate && onActivate();
      }}
      onDoubleClick={() => {
        onActivateAndShowInPane && onActivateAndShowInPane();
      }}
    >
      <div
        style={{
          width: "165px",
          height: "50px",
          borderRadius: "0px 100px 100px 0px",
        }}
        className={classNames(
          "bg-[#F0A30A] border flex flex-col justify-center pl-1",
          {
            "border-black": selected,
            "border-[#BD7000]": !selected,
          }
        )}
      >
        <div className="text-xl">Raw Data Source</div>
        <Handle type="source" id="out" position={Position.Right} />
      </div>
    </div>
  );
};

export default RawDataInputNode;
