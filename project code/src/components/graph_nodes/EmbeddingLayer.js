import BaseNode from "./node_components/BaseNode";

function EmbeddingLayer({ data: { inputCount, outputCount, setNodes }, id }) {
  return (
    <BaseNode inputCount={inputCount} outputCount={outputCount}>
      <div>Embedding Layer</div>
    </BaseNode>
  );
}

export default EmbeddingLayer;
