import RightPane from "./RightPane";
import LeftPane from "./LeftPane";
import GraphCanvas from "./GraphCanvas";

function ModelCanvas() {
  return (
    <div className="h-full w-full background-lighter relative">
      <GraphCanvas />
      <LeftPane />
      <RightPane />
    </div>
  );
}

export default ModelCanvas;
