import FunctionNode from "./FunctionNode";
import Packer from "../../../../../../../assets/packer.png";
import unPacker from "../../../../../../../assets/unpacker.png";
import classNames from "classnames";
import { Handle, Position } from "reactflow";

const ReuseNode = (nodeData) => {
  const reuseCount = nodeData.data.reuseCount;
  const minimumRequiredContentAreaHeight = Math.max(reuseCount * 19, 250);

  const onActivate = nodeData.data.onActivate;
  const onActivateAndShowInPane = nodeData.data.onActivateAndShowInPane;

  const inputHandlesList = [];
  for (let i = 0; i < reuseCount; i++) {
    inputHandlesList.push(
      <div key={i.toString()} className="relative flex flex-row">
        <Handle
          id={i.toString()}
          type="target"
          position={Position.Left}
          className="!static background-dark border-darker w-[12px] h-[8px] my-[5px] rounded-none"
        />
        <span
          className="absolute text-[8px] left-[15px] max-w-[140px] truncate font-mono"
          title={i.toString()}
        >
          {i.toString()}
        </span>
      </div>
    );
  }

  const outputHandlesList = [];
  for (let i = 0; i < reuseCount; i++) {
    outputHandlesList.push(
      <div key={i.toString()} className="relative flex flex-row">
        <Handle
          id={i.toString()}
          type="source"
          position={Position.Right}
          className="!static background-dark border-darker w-[12px] h-[8px] my-[5px] rounded-none"
        />
        <span
          className="absolute text-[8px] right-[15px] max-w-[140px] truncate font-mono"
          title={i.toString()}
        >
          {i.toString()}
        </span>
      </div>
    );
  }

  return (
    <div
      className={classNames(
        "bg-transparent flex justify-around items-center rounded w-[600px]",
        {
          "border-darker": !nodeData.selected,
          "border-black": nodeData.selected,
        }
      )}
      style={{
        height: `${minimumRequiredContentAreaHeight + 28}px`,
      }}
      onClick={() => {
        onActivate && onActivate();
      }}
      onDoubleClick={() => {
        onActivateAndShowInPane && onActivateAndShowInPane();
      }}
    >
      <div className="flex items-center" style={{ padding: "5px" }}>
        <img src={Packer} alt="Packer" className="w-[50px] h-auto" />
      </div>
      <FunctionNode {...nodeData} selected={false} handlesDisabled />
      <div className="flex items-center" style={{ padding: "5px" }}>
        <img src={unPacker} alt="Packer" className="w-[50px] h-auto" />
      </div>
      {/* Input Handles */}
      <div
        style={{ minHeight: `${minimumRequiredContentAreaHeight}px` }}
        className="absolute -left-[6px] h-max w-[12px] pt-[4px] pb-[2px] flex flex-col justify-evenly"
      >
        {inputHandlesList}
      </div>
      {/* Output Handles */}
      <div
        style={{ minHeight: `${minimumRequiredContentAreaHeight}px` }}
        className="absolute -right-[6px] h-max w-[12px] pt-[4px] pb-[2px] flex flex-col justify-evenly"
      >
        {outputHandlesList}
      </div>
    </div>
  );
};

export default ReuseNode;
