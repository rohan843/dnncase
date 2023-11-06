import ModelCanvas from "./fileTypeSpecificTabs/ModelCanvas/ModelCanvas";

function TabInnerContent() {
  return (
    <div style={{ height: "calc(100% - 4rem)" }} className="w-full">
      <ModelCanvas />
    </div>
  );
}

export default TabInnerContent;
