import layerIcon from "../../../../../../../assets/Fx.png";
import { Handle, Position } from "reactflow";
import classNames from "classnames";

const Div = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

const FunctionNode = ({
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

  const inputHandlesList = [];
  for (let inputHandle of inputHandles) {
    inputHandlesList.push(
      <div key={inputHandle} className="relative flex flex-row">
        <HandleComponent
          id={inputHandle}
          type="target"
          position={Position.Left}
          className="!static bg-[#e7c783] border border-[#BD7000] w-[12px] h-[8px] my-[5px] rounded-none"
        />
        <span
          className="absolute text-[8px] left-[15px] max-w-[140px] truncate font-mono"
          title={inputHandle}
        >
          {inputHandle}
        </span>
      </div>
    );
  }

  const outputHandlesList = [];
  for (let outputHandle of outputHandles) {
    outputHandlesList.push(
      <div key={outputHandle} className="relative flex flex-row">
        <HandleComponent
          id={outputHandle}
          type="source"
          position={Position.Right}
          className="!static bg-[#e7c783] border border-[#BD7000] w-[12px] h-[8px] my-[5px] rounded-none"
        />
        <span
          className="absolute text-[8px] right-[15px] max-w-[140px] truncate font-mono"
          title={outputHandle}
        >
          {outputHandle}
        </span>
      </div>
    );
  }

  const minimumRequiredContentAreaHeight =
    Math.max(
      Math.max(inputHandles.length, outputHandles.length) * 19,
      // HACK: remove below number to allow fully handle-count based height.
      155
    ) + 20;

  return (
    <div
      style={{
        height: `${minimumRequiredContentAreaHeight + 28}px`,
      }}
      className={classNames(
        "w-[353px] rounded-t bg-[#e7c88393] border relative",
        {
          "border-black": selected,
          "border-[#BD7000]": !selected,
        }
      )}
      onClick={() => {
        onActivate && onActivate();
      }}
      onDoubleClick={() => {
        onActivateAndShowInPane && onActivateAndShowInPane();
      }}
    >
      {/* Top Bar */}
      <div className="w-full h-[28px] border-b border-[#BD7000] rounded-t flex flex-row items-center bg-[#F0A30A]">
        <img
          src={layerIcon}
          alt=""
          className="h-[20px] w-[20px] mx-[4px] select-none"
        />
        <span className="h-full w-[260px] flex items-center pr-2 font-mono select-none">
          <p className="truncate" title={name}>
            {name}
          </p>
        </span>
      </div>

      {/* Inner Content */}
      <div
        style={{ height: `${minimumRequiredContentAreaHeight}px` }}
        className="w-full relative"
      >
        {/* Input Handles */}
        <div
          style={{ minHeight: `${minimumRequiredContentAreaHeight}px` }}
          className="absolute -left-[6px] h-max w-[12px] pt-[4px] pb-[22px] flex flex-col justify-evenly"
        >
          {inputHandlesList}
        </div>

        {/* Output Handles */}
        <div
          style={{ minHeight: `${minimumRequiredContentAreaHeight}px` }}
          className="absolute -right-[6px] h-max w-[12px] pt-[4px] pb-[22px] flex flex-col justify-evenly"
        >
          {outputHandlesList}
        </div>
      </div>

      {/* Multi-Input Handle */}
      <div className="absolute top-full left-0 w-[23px] h-[23px]">
        <HandleComponent
          id="multi-in"
          type="target"
          className={classNames(
            "relative -left-[0px] -top-[10px] bg-[#fff4dc] border w-[20px] h-[20px] rounded-full",
            {
              "border-[#000000]": selected,
              "border-[#826623]": !selected,
            }
          )}
        />
      </div>
    </div>
  );
};

export default FunctionNode;
