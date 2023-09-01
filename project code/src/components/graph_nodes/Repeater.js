import { Position, useUpdateNodeInternals } from "reactflow";
import BaseNode from "./node_components/BaseNode";
import IncrDecrToolbar from "./node_components/IncrDecrToolbar";
import useOnIncrOutputCount from "../../hooks/useOnIncrOutputCount";
import useOnDecrOutputCount from "../../hooks/useOnDecrOutputCount";

function Repeater({ data: { outputCount, setNodes }, id }) {
  const incrOutputCount = useOnIncrOutputCount();
  const decrOutputCount = useOnDecrOutputCount(2);
  const nodeUpdate = useUpdateNodeInternals();
  return (
    <BaseNode inputCount={1} outputCount={outputCount}>
      Repeater
      <IncrDecrToolbar
        label="Output"
        onIncrement={() => {
          incrOutputCount(setNodes, id, outputCount);
          nodeUpdate(id);
        }}
        onDecrement={() => {
          decrOutputCount(setNodes, id, outputCount);
          nodeUpdate(id);
        }}
        position={Position.Right}
      />
    </BaseNode>
  );
}

export default Repeater;
