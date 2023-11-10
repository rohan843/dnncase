import layerIcon from "../../../../../../../assets/Fx.png";
import { Handle, Position } from "reactflow";

const Layer = () => {
  const name = "Conv2DExtraExtraExtraWide Layer";
  const activation = "euclidean";
  return (
    <div className="m-2 w-[353px] h-[185px] background-dark border-darker rounded-t">
      {/* <Handle
        type="target"
        position={Position.Left}
        className="background-dark border-darker"
      /> */}

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

      {/* <div className="wrapper-div" style={{ display: "flex" }}>
        <div style={{ width: "300px", border: "2px solid", height: "200px" }}>
          Main Area
        </div>
        <div style={{ width: "40px", height: "80px", border: "2px solid" }}>
          <h1 style={{ color: "green", fontSize: "25px" }}>Tr</h1>
          <h1 style={{ color: "red", fontSize: "25px" }}>Pw</h1>
        </div>
      </div> */}
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
