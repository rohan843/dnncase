import BaseNode from "./node_components/BaseNode";
import useOnIncrReuseCount from "../../hooks/useOnIncrReuseCount";
import useOnDecrReuseCount from "../../hooks/useOnDecrReuseCount";
import IncrDecrToolbar from "./node_components/IncrDecrToolbar";
import { Position, useUpdateNodeInternals } from "reactflow";

function Reuse({ data: { inputCount, outputCount, reuseCount, setNodes }, id }) {
  const incrReuseCount = useOnIncrReuseCount();
  const decrReuseCount = useOnDecrReuseCount(2);
  const nodeUpdate = useUpdateNodeInternals();

  return (
    <BaseNode inputCount={inputCount} outputCount={outputCount} repetitionCount={reuseCount}>
      <div>Reuse</div>
      <IncrDecrToolbar
        label="Reuse"
        onIncrement={() => {
          incrReuseCount(setNodes, id, reuseCount);
          nodeUpdate(id);
        }}
        onDecrement={() => {
          decrReuseCount(setNodes, id, reuseCount);
          nodeUpdate(id);
        }}
        position={Position.Top}
      />
    </BaseNode>
  );
}

export default Reuse;


