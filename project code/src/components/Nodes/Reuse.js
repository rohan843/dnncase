import BaseNode from "./node_components/BaseNode";

function Reuse({ data: { reuseCount } }) {
  return (
    <BaseNode inputCount={reuseCount} outputCount={reuseCount}>
      Reuse
    </BaseNode>
  );
}

export default Reuse;
