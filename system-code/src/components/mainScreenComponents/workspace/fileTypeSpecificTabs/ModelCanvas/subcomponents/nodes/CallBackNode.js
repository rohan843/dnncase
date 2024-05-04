import React from "react";
import { Handle, Position } from "reactflow";

const CallBackNode = ({
  data: { hyperparams, onActivate, onActivateAndShowInPane, name },
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
      className="callBack relative"
    >
      <div className="circle"></div>
      <div className="outer"></div>
      <div style={{ paddingLeft: "10px" }}>
        <Handle type="source" id="in" position={Position.Right} />
      </div>
      <div className="absolute w-[300px] flex justify-center items-center -bottom-[20px]">
        <p className="truncate text-xs font-mono">
          {name || <span className="text-gray-500">Un - Assigned</span>}
        </p>
      </div>
    </div>
  );
};

export default CallBackNode;
