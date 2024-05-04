import classNames from "classnames";
import React from "react";
import unPacker from "../../../../../../../assets/unpacker.png";
import { Handle, Position } from "reactflow";

const ListPackerNode = ({
  selected,
  data: { packingCount, onActivate, onActivateAndShowInPane },
}) => {
  const minimumRequiredContentAreaHeight = Math.max(packingCount * 19, 150);

  const inputHandlesList = [];
  for (let i = 0; i < packingCount; i++) {
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
  for (let i = 0; i < 1; i++) {
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
    <div style={{ padding: "0px 0px 0px 0px" }}>
      <div
        style={{
          width: "80px",
          height: `${minimumRequiredContentAreaHeight}px`,
          borderRadius: "0px 40px 40px 0px",
          display: "flex",
          justifyContent: "center",
        }}
        className={classNames({
          "border-black": selected,
          "border-darker": !selected,
          "background-dark": true,
        })}
        onClick={() => {
          onActivate && onActivate();
        }}
        onDoubleClick={() => {
          onActivateAndShowInPane && onActivateAndShowInPane();
        }}
      >
        <div style={{ margin: "auto" }}>
          <img src={unPacker} alt="Packer" className="w-[50px] h-auto" />
        </div>
        {/* Input Handles */}
        <div
          style={{ minHeight: `${minimumRequiredContentAreaHeight}px` }}
          className="absolute -left-[6px] h-max w-[12px] pt-[4px] pb-[2px] flex flex-col justify-evenly"
        >
          {inputHandlesList}
        </div>
        {/* Output Handle */}
        <div
          style={{ minHeight: `${minimumRequiredContentAreaHeight}px` }}
          className="absolute -right-[6px] h-max w-[12px] pt-[4px] pb-[2px] flex flex-col justify-evenly"
        >
          {outputHandlesList}
        </div>
      </div>
    </div>
  );
};

export default ListPackerNode;
