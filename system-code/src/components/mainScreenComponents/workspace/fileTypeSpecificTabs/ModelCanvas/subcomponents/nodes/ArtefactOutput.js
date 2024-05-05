import classNames from "classnames";
import { Handle, Position } from "reactflow";

const ArtefactOutput = ({
  data: { name, onActivate, onActivateAndShowInPane },
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
        className={classNames("OutputNodeStyles scale-105 relative", {
          "!bg-[#000000]": selected,
          "!bg-[#001DBC]": !selected,
        })}
      ></div>
      <div
        className="OutputNodeStyles flex flex-col items-end justify-center relative left-[1.5px]"
        title={name || "Untitled"}
      >
        <p className="truncate text-right pr-1 w-[60%]">
          {name || <span className="text-blue-200">Untitled</span>}
        </p>
      </div>
      <Handle id="in" type="target" position={Position.Left} />
    </div>
  );
};

export default ArtefactOutput;
