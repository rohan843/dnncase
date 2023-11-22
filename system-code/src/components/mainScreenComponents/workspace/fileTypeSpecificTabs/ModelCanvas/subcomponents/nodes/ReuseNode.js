import LayerNode from "./LayerNode";
import Packer from "../../../../../../../assets/packer.png";
import unPacker from "../../../../../../../assets/unpacker.png";

const ReuseNode = ({ obj }) => {
  return (
    <div className="background-dark border-darker flex justify-around items-center w-[450px] h-[200px]">
      <div className="flex items-center" style={{padding:"5px"}}>
        <img src={Packer} alt="Packer" className="w-[100px] h-[100px]" />
      </div>
      <LayerNode {...obj} />
      <div className="flex items-center" style={{padding:"5px"}}>
        <img src={unPacker} alt="Packer" className="w-[100px] h-[100px]" />
      </div>
    </div>
  );
};

export default ReuseNode;
