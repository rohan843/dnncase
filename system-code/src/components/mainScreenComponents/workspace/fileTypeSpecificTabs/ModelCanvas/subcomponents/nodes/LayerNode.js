import layerIcon from "../../../../../../../assets/Fx.png";
import trainedLayerIcon from "../../../../../../../assets/layer-trained.png";
import untrainedLayerIcon from "../../../../../../../assets/layer-not-trained.png";
import pretrainedWeightsIcon from "../../../../../../../assets/layer-prev-weights.png";
import newWeightsIcon from "../../../../../../../assets/layer-new-weights.png";
import { Handle, Position } from "reactflow";

const Layer = () => {
  const name = "Conv2DExtraExtraExtraWide Layer";
  const activation = "euclidean";
  const trained = true;
  const usingPrevWeights = true;
  const numInputNodes = 3;
  const numOutputNodes = 3;
  if (!trained && usingPrevWeights) {
    console.error(
      "Layer: An untrained layer is specified to use pre-trained weights."
    );
  }

  const dummyInputHandlesList = [];
  for (let i = 0; i < numInputNodes; i++) {
    dummyInputHandlesList.push(
      <div className="relative flex flex-row">
        <Handle
          key={`i${i}`}
          id={`i${i}`}
          type="source"
          position={Position.Left}
          className="!static background-dark border-darker w-[12px] h-[8px] my-[5px] rounded-none"
        />
        <span
          className="absolute text-[8px] left-[15px] w-[140px] truncate font-mono"
          title={`i${i} dsg sdg dsg dsg dg dg sdg sdg esrg srd sdr gs`}
        >{`i${i} dsg sdg dsg dsg dg dg sdg sdg esrg srd sdr gs`}</span>
      </div>
    );
  }

  const dummyOutputHandlesList = [];
  for (let i = 0; i < numOutputNodes; i++) {
    dummyOutputHandlesList.push(
      <div className="relative flex flex-row">
        <Handle
          key={`o${i}`}
          id={`o${i}`}
          type="source"
          position={Position.Right}
          className="!static background-dark border-darker w-[12px] h-[8px] my-[5px] rounded-none"
        />
        <span
          className="absolute text-[8px] right-[15px] w-[140px] truncate font-mono"
          title={`o${i} dsg sdg dsg dsg dg dg sdg sdg esrg srd sdr gs`}
        >{`o${i} dsg sdg dsg dsg dg dg sdg sdg esrg srd sdr gs`}</span>
      </div>
    );
  }

  const minimumRequiredContentAreaHeight = Math.max(
    Math.max(numInputNodes, numOutputNodes) * 19,
    // HACK: remove below number to allow fully handle-count based height.
    155
  );

  return (
    <div
      style={{
        height: `${minimumRequiredContentAreaHeight + 28}px`,
      }}
      className="w-[353px] background-dark border-darker rounded-t"
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
          {dummyInputHandlesList}
        </div>

        {/* Output Handles */}
        <div
          style={{ minHeight: `${minimumRequiredContentAreaHeight}px` }}
          className="absolute -right-[6px] h-max w-[12px] pt-[4px] pb-[2px] flex flex-col justify-evenly"
        >
          {dummyOutputHandlesList}
        </div>
      </div>
    </div>
  );
};

export default Layer;
