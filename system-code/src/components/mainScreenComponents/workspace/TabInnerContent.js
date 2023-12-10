import ModelCanvas from "./fileTypeSpecificTabs/ModelCanvas/ModelCanvas";

function TabInnerContent({ activeFileIndex }) {
  return (
    <div style={{ height: "calc(100% - 4rem)" }} className="w-full">
      {
        <ModelCanvas
          activeFileIndex={activeFileIndex}
        /> /* || <SomeOtherScreenContent /> || <SomeOtherScreenContent />*/
      }
    </div>
  );
}

export default TabInnerContent;
