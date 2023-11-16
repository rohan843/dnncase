import classNames from "classnames";
import React from "react";

const PackerNode = ({ selected }) => {
  return (
    <div style={{ padding: "0px 0px 0px 30px" }}>
      <div
        style={{
          width: "80px",
          border: "2px solid",
          height: "150px",
          borderRadius: "0px 50px 50px 0px",
          display: "flex",
          justifyContent: "center",
        }}
        className={classNames({
          "border-black": selected,
          "border-darker": !selected,
        })}
      >
        <div style={{ margin: "auto" }}>Add image</div>
      </div>
    </div>
  );
};

export default PackerNode;
