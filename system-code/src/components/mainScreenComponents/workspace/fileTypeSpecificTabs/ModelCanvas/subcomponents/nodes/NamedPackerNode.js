import { Handle, Position } from "reactflow";

function NamedPackerNode() {
  return (
    <div className="h-[40px] w-[40px] rounded-r-full border-black bg-gray-400">
      <Handle
        className="w-[10px] h-[5px] border-black rounded-none bg-gray-600"
        position={Position.Left}
        type="target"
        id="in"
      />
      <Handle
        className="w-[10px] h-[5px] border-black rounded-none bg-gray-600"
        position={Position.Right}
        type="source"
        id="out"
      />
    </div>
  );
}

export default NamedPackerNode;
