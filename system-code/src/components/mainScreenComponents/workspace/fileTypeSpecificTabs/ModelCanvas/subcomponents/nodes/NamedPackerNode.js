import { Handle, Position } from "reactflow";

function NamedPackerNode({ data: { onActivate, onActivateAndShowInPane } }) {
  return (
    <div
      onClick={() => {
        onActivate && onActivate();
      }}
      onDoubleClick={() => {
        onActivateAndShowInPane && onActivateAndShowInPane();
      }}
      className="h-[40px] w-[50px] rounded-r-full border-2 text-white border-[#2d1e56] bg-[#6A00FF] flex items-center justify-center"
    >
      <span className="relative right-0.5 font-bold text-xs">Pk</span>
      <Handle
        className="w-[10px] h-[5px] border-black rounded-none bg-[#48237d]"
        position={Position.Left}
        type="target"
        id="multi-in"
      />
      <Handle
        className="w-[10px] h-[5px] border-black rounded-none bg-[#48237d]"
        position={Position.Right}
        type="source"
        id="out"
      />
    </div>
  );
}

export default NamedPackerNode;
