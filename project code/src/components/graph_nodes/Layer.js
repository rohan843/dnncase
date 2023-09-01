import { Position, useUpdateNodeInternals } from "reactflow";
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
  const nodeUpdate = useUpdateNodeInternals();

  return (
    <BaseNode inputCount={inputCount} outputCount={outputCount}>
      <div>Layer</div>
      <IncrDecrToolbar
        label="Input"
        onIncrement={() => {
          incrInputCount(setNodes, id, inputCount);
          nodeUpdate(id);
        }}
        onDecrement={() => {
          decrInputCount(setNodes, id, inputCount);
          nodeUpdate(id);
        }}
        position={Position.Left}
        />
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

export default Layer;
