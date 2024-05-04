import classNames from "classnames";
import { Handle, Position } from "reactflow";

const RawDataInputNode = ({
  data: { hyperparams, onActivate, onActivateAndShowInPane },
  selected,
}) => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 w-[180px] h-[120px]">
      <div
        style={{
          width: "180px",
          height: "120px",
          clipPath:
            "polygon(15% 0, 85% 0, 100% 50%, 85% 100%, 15% 100%, 0% 50%)",
        }}
        className={classNames(
          "scale-[1.03]",
          {
            "bg-[#000]": selected,
            "bg-[#6D1F00]": !selected
          }
        )}
      />
      <div
        style={{
          width: "180px",
          height: "120px",
          clipPath:
            "polygon(15% 0, 85% 0, 100% 50%, 85% 100%, 15% 100%, 0% 50%)",
        }}
        className={classNames(
          "bg-[#A0522D] text-white flex flex-col justify-center items-center"
        )}
        onClick={() => {
          onActivate && onActivate();
        }}
        onDoubleClick={() => {
          onActivateAndShowInPane && onActivateAndShowInPane();
        }}
      >
        <p className="text-xl">Raw Data Source</p>
      </div>
      <Handle type="source" id="out" position={Position.Right} />
    </div>
  );
};

export default RawDataInputNode;
