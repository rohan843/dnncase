import LayerNode from "./LayerNode";
import Packer from "../../../../../../../assets/packer_left.png";
import unPacker from "../../../../../../../assets/packer_right.png";

const ReuseNode = ({ obj }) => {
  return (
    <div className="background-dark flex justify-around w-[400px] h-[200px]">
      <div className="flex items-center" style={{padding:"5px"}}>
        <img src={Packer} alt="Packer" className="w-[100px] h-[100px]" />
      </div>
      <LayerNode {...obj} />
      <div className="flex items-center" style={{padding:"5px"}}>
        <img src={unPacker} alt="Packer" className="w-[150px] h-[100px]" />
      </div>
    </div>
  );
};

export default ReuseNode;
