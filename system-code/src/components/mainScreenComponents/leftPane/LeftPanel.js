import LeftbarView from "./LeftbarView";

// This component serves as a resizable parent component.
function LeftPanel() {
  return (
    <div className="border-right-darker h-full background-light w-[30%]">
      <LeftbarView viewType="fs"/>
    </div>
  );
}

export default LeftPanel;
