import LayerNode from "./LayerNode";
import Packer from "../../../../../../../assets/packer.png";
import unPacker from "../../../../../../../assets/unpacker.png";
import classNames from "classnames";
import { Handle, Position } from "reactflow";

const ReuseNode = (nodeData) => {
  const reuseCount = nodeData.data.reuseCount;
  return (
    <div
      className={classNames(
        "bg-transparent flex justify-around items-center rounded w-[600px] h-[250px]",
        {
          "border-darker": !nodeData.selected,
          "border-black": nodeData.selected,
        }
      )}
    >
      <div className="flex items-center" style={{ padding: "5px" }}>
        <img src={Packer} alt="Packer" className="w-[50px] h-auto" />
      </div>
      <LayerNode {...nodeData} selected={false} handlesDisabled />
      <div className="flex items-center" style={{ padding: "5px" }}>
        <img src={unPacker} alt="Packer" className="w-[50px] h-auto" />
      </div>
      <Handle position={Position.Left} type="target" id="0"/>
      <Handle position={Position.Right} type="source" id="0"/>
    </div>
  );
};

export default ReuseNode;
