import BaseNode from "./node_components/BaseNode";

function Layer({ data: { inputCount, outputCount, setNodes }, id }) {
  console.log(id);
  const onIncrInputCount = () => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id !== id) return { ...node };
        else
          return {
            ...node,
            data: { ...node.data, inputCount: inputCount + 1 },
          };
      })
    );
  };
  const onDecrInputCount = () => {
    if (inputCount === 1) return;
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id !== id) return { ...node };
        else
          return {
            ...node,
            data: { ...node.data, inputCount: inputCount - 1 },
          };
      })
    );
  };
  const onIncrOutputCount = () => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id !== id) return { ...node };
        else
          return {
            ...node,
            data: { ...node.data, outputCount: outputCount + 1 },
          };
      })
    );
  };
  const onDecrOutputCount = () => {
    if (outputCount === 1) return;
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id !== id) return { ...node };
        else
          return {
            ...node,
            data: { ...node.data, outputCount: outputCount - 1 },
          };
      })
    );
  };
  return (
    <BaseNode
      inputCount={inputCount}
      outputCount={outputCount}
      showInputCountManipulationButtons
      showOutputCountManipulationButtons
      onIncrInputCount={onIncrInputCount}
      onDecrInputCount={onDecrInputCount}
      onIncrOutputCount={onIncrOutputCount}
      onDecrOutputCount={onDecrOutputCount}
    >
      Layer
    </BaseNode>
  );
}

export default Layer;
