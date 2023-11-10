import React from "react";
import { Handle, Position } from "reactflow";

const ConvLSTM2Dlayer = () => {
  return (
    <div style={{ padding: "0px 0px 0px 30px" }}>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#555" }}
      />
      <div style={{ width: "300px", border: "2px solid" }}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h2>ConvLSTM2Dlayer</h2>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <p style={{ fontSize: "9px" }}>Activation: relu</p>
          </div>
        </div>
      </div>
      <div className="wrapper-div" style={{ display: "flex" }}>
        <div style={{ width: "300px", border: "2px solid", height: "200px" }}>
          Main Area
        </div>
        <div style={{ width: "40px", height: "80px", border: "2px solid" }}>
          <h1 style={{ color: "green", fontSize: "25px" }}>Tr</h1>
          <h1 style={{ color: "red", fontSize: "25px" }}>Pw</h1>
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: "#555" }}
      />
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: "#555" }}
      />
    </div>
  );
};

export default ConvLSTM2Dlayer;
