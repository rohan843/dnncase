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
      className={classNames(
        "w-[400px] h-[60px] relative grid grid-cols-1 grid-rows-1"
      )}
      onClick={() => {
        onActivate && onActivate();
      }}
      onDoubleClick={() => {
        onActivateAndShowInPane && onActivateAndShowInPane();
      }}
    >
      <div
        style={{
          clipPath:
            "polygon(0 50%, 12.5% 0, 87.5% 0, 100% 50%, 87.5% 100%, 12.5% 100%)",
        }}
        className={classNames("w-[400px] h-[60px] scale-[1.01]", {
          "bg-[#000]": selected,
          "bg-[#826623]": !selected,
        })}
      />
      <div
        style={{
          clipPath:
            "polygon(0 50%, 12.5% 0, 87.5% 0, 100% 50%, 87.5% 100%, 12.5% 100%)",
        }}
        className={classNames(
          "w-[400px] h-[60px] bg-[#F0A30A] flex items-center justify-center text-xl px-2 truncate border-t border-b",
          {
            "border-[#000]": selected,
            "border-[#826623]": !selected,
          }
        )}
      >
        <p className="truncate" title={"CompiledClassifierModelEvaluator"}>
          CompiledClassifierModelEvaluator
        </p>
      </div>

      {/* Output Handle */}
      <HandleComponent
        id="out"
        type="source"
        position={Position.Right}
        className={classNames(
          "bg-[#e7c783] border w-[12px] h-[8px] rounded-none",
          {
            "border-[#000]": selected,
            "border-[#BD7000]": !selected,
          }
        )}
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
