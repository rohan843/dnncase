import BaseNode from "./node_components/BaseNode";
import useOnIncrReuseCount from "../../hooks/useOnIncrReuseCount";
import useOnDecrReuseCount from "../../hooks/useOnDecrReuseCount";
import IncrDecrToolbar from "./node_components/IncrDecrToolbar";
import { Position } from "reactflow";

function Reuse({ data: { reuseCount, setNodes }, id }) {
  const incrReuseCount = useOnIncrReuseCount();
  const decrReuseCount = useOnDecrReuseCount(2);
  console.log(id, reuseCount);
  return (
    <BaseNode inputCount={reuseCount} outputCount={reuseCount}>
      <div>Reuse</div>
      <IncrDecrToolbar
        label="Reuse"
        onIncrement={() => {
          incrReuseCount(setNodes, id, reuseCount);
        }}
        onDecrement={() => {
          decrReuseCount(setNodes, id, reuseCount);
        }}
        position={Position.Top}
      />
    </BaseNode>
  );
}

export default Reuse;
