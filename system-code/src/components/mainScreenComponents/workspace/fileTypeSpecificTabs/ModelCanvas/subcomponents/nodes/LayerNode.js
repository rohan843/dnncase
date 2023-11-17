// TODO: Add editing facility for labels.

import layerIcon from "../../../../../../../assets/Fx.png";
import trainedLayerIcon from "../../../../../../../assets/layer-trained.png";
import untrainedLayerIcon from "../../../../../../../assets/layer-not-trained.png";
import pretrainedWeightsIcon from "../../../../../../../assets/layer-prev-weights.png";
import newWeightsIcon from "../../../../../../../assets/layer-new-weights.png";
import { Handle, Position } from "reactflow";
import classNames from "classnames";

const LayerNode = ({
  data: {
    name,
    trained,
    usingPrevWeights,
    hyperparams,
    inputHandles,
    outputHandles,
    onActivate,
    onActivateAndShowInPane,
  },
  selected,
}) => {
  if (!trained && usingPrevWeights) {
    console.error(
      "Layer: An untrained layer is specified to use pre-trained weights."
    );
  }

  let activation = "none";
  for (let hp of hyperparams) {
    if (hp.id === "activation") {
      activation = hp.value;
    }
  }

  const inputHandlesList = [];
  for (let inputHandle of inputHandles) {
    inputHandlesList.push(
      <div key={inputHandle} className="relative flex flex-row">
        <Handle
          id={inputHandle}
          type="target"
          position={Position.Left}
          className="!static background-dark border-darker w-[12px] h-[8px] my-[5px] rounded-none"
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
        <Handle
          id={outputHandle}
          type="source"
          position={Position.Right}
          className="!static background-dark border-darker w-[12px] h-[8px] my-[5px] rounded-none"
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

  const minimumRequiredContentAreaHeight = Math.max(
    Math.max(inputHandles.length, outputHandles.length) * 19,
    // HACK: remove below number to allow fully handle-count based height.
    155
  );

  return (
    <div
      style={{
        height: `${minimumRequiredContentAreaHeight + 28}px`,
      }}
      className={classNames("w-[353px] background-dark rounded-t", {
        "border-black": selected,
        "border-darker": !selected,
      })}
      onClick={() => {
        onActivate && onActivate();
      }}
      onDoubleClick={() => {
        onActivateAndShowInPane && onActivateAndShowInPane();
      }}
    >
      {/* Weights Info Box */}
      <div className="select-none absolute -top-[20px] right-[20px] h-[21px] w-[49px] rounded-t border-darker background-dark flex flex-row justify-evenly items-center">
        <img
          src={(trained && trainedLayerIcon) || untrainedLayerIcon}
          alt=""
          title={
            (trained && "This layer is pretrained") ||
            "This layer is not pretrained"
          }
          className="w-[24px] h-[16px]"
        />
        <img
          src={(usingPrevWeights && pretrainedWeightsIcon) || newWeightsIcon}
          alt=""
          title={
            (usingPrevWeights && "This layer is using pre-trained weights") ||
            "This layer is using newly initialized weights"
          }
          className="w-[24px] h-[16px]"
        />
      </div>

      {/* Top Bar */}
      <div className="w-full h-[28px] border-bottom-darker flex flex-row items-center">
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
        <div className="w-[65px] pr-1 h-full flex flex-col text-mono select-none">
          <div className="grow" />
          <p className="text-[7px] truncate">
            Activation:{" "}
            <span className="font-bold font-mono" title={activation}>
              {activation}
            </span>
          </p>
        </div>
      </div>

      {/* Inner Content */}
      <div
        style={{ height: `${minimumRequiredContentAreaHeight}px` }}
        className="w-full relative"
      >
        {/* Input Handles */}
        <div
          style={{ minHeight: `${minimumRequiredContentAreaHeight}px` }}
          className="absolute -left-[6px] h-max w-[12px] pt-[4px] pb-[2px] flex flex-col justify-evenly"
        >
          {inputHandlesList}
        </div>

        {/* Output Handles */}
        <div
          style={{ minHeight: `${minimumRequiredContentAreaHeight}px` }}
          className="absolute -right-[6px] h-max w-[12px] pt-[4px] pb-[2px] flex flex-col justify-evenly"
        >
          {outputHandlesList}
        </div>
      </div>
      {/* <Handle id="i0" type="target" */}
    </div>
  );
};

export default LayerNode;
