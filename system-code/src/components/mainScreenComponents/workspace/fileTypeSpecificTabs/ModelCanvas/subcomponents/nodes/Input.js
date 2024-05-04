import classNames from "classnames";
import { Handle, Position } from "reactflow";

const InputNode = ({
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
      className="w-[153px] h-[100px] grid grid-cols-1 grid-rows-1 justify-center"
    >
      <div
        className={classNames(
          "InputNodeStyles scale-105 relative left-[1.5px]",
          {
            "!bg-[#000000]": selected,
            "!bg-[#001DBC]": !selected,
          }
        )}
      ></div>
      <div
        className="InputNodeStyles flex flex-col items-start justify-center"
        title="layer_count"
      >
        <p className="truncate pl-2 w-[60%]">layer_count</p>
      </div>
      <Handle id="out" type="source" position={Position.Right} />
    </div>
  );
};

export default InputNode;
