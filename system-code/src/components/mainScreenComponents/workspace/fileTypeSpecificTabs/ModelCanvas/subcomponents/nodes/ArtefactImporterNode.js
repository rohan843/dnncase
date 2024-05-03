// TODO 1: Add border.
// TODO 2: Make triangles imploded.

import { Handle, Position } from "reactflow";
import classNames from "classnames";

const Div = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

const ArtefactImporterNode = ({
  data: {
    name,
    hyperparams,
    inputHandles,
    outputHandles,
    onActivate,
    onActivateAndShowInPane,
  },
  selected,
  handlesDisabled,
}) => {
  let HandleComponent = Handle;
  if (handlesDisabled) {
    HandleComponent = Div;
  }

  return (
    <div
      className={classNames("w-[400px] h-[60px] relative flex flex-row")}
      onClick={() => {
        onActivate && onActivate();
      }}
      onDoubleClick={() => {
        onActivateAndShowInPane && onActivateAndShowInPane();
      }}
    >
      <div className="w-[12%] bg-[#F0A30A] triangle-point-left" />
      <div className="w-[75%] bg-[#F0A30A] flex items-center justify-center text-xl px-2 truncate">
        <p className="truncate" title={"CompiledClassifierModelEvaluator"}>
          CompiledClassifierModelEvaluator
        </p>
      </div>
      <div className="w-[13%] bg-[#F0A30A] triangle-point-right" />

      {/* Output Handle */}
      <HandleComponent
        id="out"
        type="source"
        position={Position.Right}
        className="bg-[#e7c783] border border-[#BD7000] w-[12px] h-[8px] rounded-none"
      />

      {/* Multi-Input Handle */}
      <HandleComponent
        id="multi-in"
        type="target"
        position={Position.Left}
        className={classNames(
          "bg-[#fff4dc] border w-[20px] h-[20px] rounded-full",
          {
            "border-[#000000]": selected,
            "border-[#826623]": !selected,
          }
        )}
      />
    </div>
  );
};

export default ArtefactImporterNode;
