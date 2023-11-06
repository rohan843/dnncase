import ToolTipWrapper from "../../../../tooltipWrapper/ToolTipWrapper";

function UnsavedFlag({ show }) {
  return (
    <ToolTipWrapper helpText="Unsaved<br />Changes">
      <div className="h-max w-max flex items-center pr-1.5">
        {show && <div className="h-[7px] w-[7px] rounded bg-black" />}
      </div>
    </ToolTipWrapper>
  );
}

export default UnsavedFlag;
