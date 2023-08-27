import BaseNode from "./node_components/BaseNode";

function Layer({ data: { inputCount, outputCount } }) {
  return (
    <BaseNode inputCount={inputCount} outputCount={outputCount}>
      Layer
    </BaseNode>
  );
}

export default Layer;
