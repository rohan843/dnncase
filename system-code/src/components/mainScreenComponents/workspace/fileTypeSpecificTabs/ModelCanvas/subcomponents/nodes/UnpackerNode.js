import classNames from "classnames";
import Packer from "../../../../../../../assets/packer.png";
import { find } from "lodash";
import { Handle, Position } from "reactflow";

const UnpackerNode = ({
  selected,
  data: { hyperparams, onActivateAndShowInPane, onActivate },
}) => {
  const unpackingCount = find(
    hyperparams,
    (hp) => hp.id === "unpackingCount"
  ).value;

  const minimumRequiredContentAreaHeight = Math.max(unpackingCount * 19, 150);

  const outputHandlesList = [];
  for (let i = 0; i < unpackingCount; i++) {
    outputHandlesList.push(
      <div key={i.toString()} className="relative flex flex-row">
        <Handle
          id={i.toString()}
          type="target"
          position={Position.Right}
          className="!static background-dark border-darker w-[12px] h-[8px] my-[5px] rounded-none"
        />
        <span
          className="absolute text-[8px] left-[15px] max-w-[140px] truncate font-mono"
          title={i.toString()}
        >
          {i.toString()}
        </span>
      </div>
    );
  }

  const inputHandlesList = [];
  for (let i = 0; i < 1; i++) {
    inputHandlesList.push(
      <div key={i.toString()} className="relative flex flex-row">
        <Handle
          id={i.toString()}
          type="source"
          position={Position.Left}
          className="!static background-dark border-darker w-[12px] h-[8px] my-[5px] rounded-none"
        />
        <span
          className="absolute text-[8px] right-[15px] max-w-[140px] truncate font-mono"
          title={i.toString()}
        >
          {i.toString()}
        </span>
      </div>
    );
  }

  return (
    <div style={{ padding: "0px 0px 0px 0px" }}>
      <div
        style={{
          width: "80px",
          height: `${minimumRequiredContentAreaHeight}px`,
          borderRadius: "40px 0px 0px 40px",
          display: "flex",
          justifyContent: "center",
        }}
        className={classNames({
          "border-black": selected,
          "border-darker": !selected,
          "background-dark": true,
        })}
        onClick={() => {
          onActivate && onActivate();
        }}
        onDoubleClick={() => {
          onActivateAndShowInPane && onActivateAndShowInPane();
        }}
      >
        <div style={{ margin: "auto" }}>
          <img src={Packer} alt="Packer" className="w-[50px] h-auto" />
        </div>
        {/* Output Handles */}
        <div
          style={{ minHeight: `${minimumRequiredContentAreaHeight}px` }}
          className="absolute -right-[6px] h-max w-[12px] pt-[4px] pb-[2px] flex flex-col justify-evenly"
        >
          {outputHandlesList}
        </div>
        {/* Input Handle */}
        <div
          style={{ minHeight: `${minimumRequiredContentAreaHeight}px` }}
          className="absolute -left-[6px] h-max w-[12px] pt-[4px] pb-[2px] flex flex-col justify-evenly"
        >
          {inputHandlesList}
        </div>
      </div>
    </div>
  );
};

export default UnpackerNode;
