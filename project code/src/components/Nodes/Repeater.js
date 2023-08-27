import BaseNode from "./BaseNode";

function Repeater({ data: { outputCount } }) {
  return (
    <BaseNode inputCount={1} outputCount={outputCount}>
      Repeater
    </BaseNode>
  );
}

export default Repeater;
