import { Position } from "reactflow";
import BaseNode from "./node_components/BaseNode";
import IncrDecrToolbar from "./node_components/IncrDecrToolbar";
import useOnIncrOutputCount from "../../hooks/useOnIncrOutputCount";
import useOnDecrOutputCount from "../../hooks/useOnDecrOutputCount";
import useOnIncrInputCount from "../../hooks/useOnIncrInputCount";
import useOnDecrInputCount from "../../hooks/useOnDecrInputCount";

function Layer({ data: { inputCount, outputCount, setNodes }, id }) {
  const incrOutputCount = useOnIncrOutputCount();
  const decrOutputCount = useOnDecrOutputCount(1);
  const incrInputCount = useOnIncrInputCount();
  const decrInputCount = useOnDecrInputCount(1);

  return (
    <BaseNode inputCount={inputCount} outputCount={outputCount}>
      <div>Layer</div>
      <IncrDecrToolbar
        label="Input"
        onIncrement={() => {
          incrInputCount(setNodes, id, inputCount);
        }}
        onDecrement={() => {
          decrInputCount(setNodes, id, inputCount);
        }}
        position={Position.Left}
      />
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

export default Layer;
