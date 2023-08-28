import { Position } from "reactflow";
import BaseNode from "./node_components/BaseNode";
import IncrDecrToolbar from "./node_components/IncrDecrToolbar";
import useOnIncrOutputCount from "../../hooks/useOnIncrOutputCount";
import useOnDecrOutputCount from "../../hooks/useOnDecrOutputCount";

function Repeater({ data: { outputCount, setNodes }, id }) {
  const incrOutputCount = useOnIncrOutputCount();
  const decrOutputCount = useOnDecrOutputCount(2);
  return (
    <BaseNode inputCount={1} outputCount={outputCount}>
      Repeater
      <IncrDecrToolbar
        label="Output"
        onIncrement={() => {
          incrOutputCount(setNodes, id, outputCount);
        }}
        onDecrement={() => {
          decrOutputCount(setNodes, id, outputCount);
        }}
        position={Position.Right}
      />
    </BaseNode>
  );
}

export default Repeater;
