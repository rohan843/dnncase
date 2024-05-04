import { Handle, Position } from "reactflow";
import classNames from "classnames";

const DataVariableOUT = ({
  data: {
    name,
    hyperparams,
    inputHandles,
    outputHandles,
    onActivate,
    onActivateAndShowInPane,
  },
  selected,
  handlesDisabled,
}) => {
  return (
    <div className="w-[200px] h-[50px] grid grid-cols-1 grid-rows-1 justify-center">
      <div
        style={{
          borderTopLeftRadius: "40px",
          borderBottomLeftRadius: "40px",
          clipPath: "polygon(100% 50%, 80% 0, 0 0, 0 100%, 80% 100%)",
        }}
        className={classNames(
          "w-[200px] h-[50px] text-white relative left-[2.5px]",
          {
            "bg-[#314354]": !selected,
            "bg-black": selected,
          }
        )}
      ></div>
      <div
        style={{
          borderTopLeftRadius: "40px",
          borderBottomLeftRadius: "40px",
          clipPath: "polygon(100% 50%, 80% 0, 0 0, 0 100%, 80% 100%)",
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
        <p className="truncate pr-[40px] pl-3">jdhgksdh gsdl hgkdxf</p>
      </div>
      <Handle id="output" type="source" position={Position.Right} />
    </div>
  );
};

export default DataVariableOUT;
