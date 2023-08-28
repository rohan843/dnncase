import BaseNode from "./node_components/BaseNode";

function Repeater({ data: { outputCount } }) {
  return (
    <BaseNode inputCount={1} outputCount={outputCount} showOutputCountManipulationButtons>
      Repeater
    </BaseNode>
  );
}

export default Repeater;
