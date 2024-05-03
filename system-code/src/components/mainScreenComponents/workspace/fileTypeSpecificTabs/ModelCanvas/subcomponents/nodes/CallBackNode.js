import React from "react";
import { Handle, Position } from "reactflow";

const CallBackNode = ({
  data: { hyperparams, onActivate, onActivateAndShowInPane },
  selected,
}) => {
  return (
    <div className="callBack">
      <div className="circle"></div>
      <div className="outer"></div>
      <div style={{ paddingLeft: "10px" }}>
        <Handle type="source" id="in" position={Position.Right} />
      </div>
    </div>
  );
};

export default CallBackNode;
