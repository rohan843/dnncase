import RightPane from "./RightPane";
import LeftPane from "./LeftPane";
import GraphCanvas from "./GraphCanvas";

const permissibleFileTypes = {
  dc: true,
};

function ModelCanvas({ activeFileIndex }) {
  // if (!permissibleFileTypes[activeFileType]) return null;

  return (
    <div className="h-full w-full background-lighter relative overflow-hidden">
      <GraphCanvas />
      <LeftPane />
      <RightPane />
    </div>
  );
}

export default ModelCanvas;
