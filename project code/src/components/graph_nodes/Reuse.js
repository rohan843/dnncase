import BaseNode from "./node_components/BaseNode";

function Reuse({ data: { reuseCount } }) {
  return (
    <BaseNode
      inputCount={reuseCount}
      outputCount={reuseCount}
      showOutputCountManipulationButtons
    >
      Reuse
    </BaseNode>
  );
}

export default Reuse;
