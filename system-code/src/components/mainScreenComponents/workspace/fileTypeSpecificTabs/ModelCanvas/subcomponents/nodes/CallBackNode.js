import React from 'react';
import { Handle, Position, ReactFlowProvider} from "reactflow";


const CallBackNode = () => {
  return (
    <div className="callBack">
      <div className="circle"></div>
      <div className="outer"></div>
      <div style={{ paddingLeft: '10px' }}>
        <Handle type="source" id="in" position={Position.Right} />
      </div>
    </div>
  );
};

export default CallBackNode;
