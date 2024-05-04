import { Handle, Position } from "reactflow";
import classNames from "classnames";

const DataVariableIN = ({
  data: { name, hyperparams, onActivate, onActivateAndShowInPane },
  selected,
}) => {
  return (
    <div className="w-[200px] h-[50px] grid grid-cols-1 grid-rows-1 justify-center">
      <div
        style={{
          borderTopRightRadius: "40px",
          borderBottomRightRadius: "40px",
          clipPath: "polygon(0 50%, 20% 0, 100% 0, 100% 100%, 20% 100%)",
        }}
        className={classNames(
          "w-[200px] h-[50px] text-white relative -left-[2.5px]",
          {
            "bg-[#314354]": !selected,
            "bg-black": selected,
          }
        )}
      ></div>
      <div
        style={{
          borderTopRightRadius: "40px",
          borderBottomRightRadius: "40px",
          clipPath: "polygon(0 50%, 20% 0, 100% 0, 100% 100%, 20% 100%)",
        }}
        className={classNames(
          "w-[200px] h-[50px] text-white bg-[#647687] relative border-2 flex items-center justify-center",
          {
            "border-[#314354]": !selected,
            "border-[#000000]": selected,
          }
        )}
        onClick={() => {
          onActivate && onActivate();
        }}
        onDoubleClick={() => {
          onActivateAndShowInPane && onActivateAndShowInPane();
        }}
      >
        <p className="truncate pl-[40px] pr-2">
          {name || <span className="text-gray-300">Untitled</span>}
        </p>
      </div>
      <Handle id="input" type="target" position={Position.Left} />
    </div>
  );
};

export default DataVariableIN;
