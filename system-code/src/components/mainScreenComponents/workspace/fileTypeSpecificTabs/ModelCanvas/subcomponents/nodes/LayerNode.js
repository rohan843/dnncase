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
  if(!trained && usingPrevWeights) {
    console.error('Layer: An untrained layer is specified to use pre-trained weights.');
  }
  return (
    <div className="w-[353px] h-[185px] background-dark border-darker rounded-t">
      {/* <Handle
        type="target"
        position={Position.Left}
        className="background-dark border-darker"
      /> */}

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

      <div className="h-[155px] w-full relative">
        <div className="select-none absolute -top-[1px] -right-[23px] w-[23px] h-[42px] border-darker background-dark flex flex-col justify-evenly">
          <img
            src={(trained && trainedLayerIcon) || untrainedLayerIcon}
            alt=""
            title={
              (trained && "This layer is pretrained") ||
              "This layer is not pretrained"
            }
          />
          <img
            src={(usingPrevWeights && pretrainedWeightsIcon) || newWeightsIcon}
            alt=""
            title={
              (usingPrevWeights && "This layer is using pre-trained weights") ||
              "This layer is using newly initialized weights"
            }
          />
        </div>
      </div>

      {/* <Handle
        type="source"
        position={Position.Right}
        className="background-dark border-darker"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="background-dark border-darker"
      /> */}
    </div>
  );
};

export default Layer;
