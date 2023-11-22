import classNames from "classnames";
import Packer from "../../../../../../../assets/packer.png";

const UnpackerNode = ({ selected }) => {
  return (
    <div style={{ padding: "0px 0px 0px 30px" }}>
      <div
        style={{
          width: "80px",
          border: "2px solid",
          height: "150px",
          borderRadius: "50px 0px 0px 50px",
          display: "flex",
          justifyContent: "center",
        }}
        className={classNames({
          "border-black": selected,
          "border-darker": !selected,
          "background-dark":true,
          "border-darker":true,
        })}
      >
        <div style={{ margin: "auto" }}>
        <img src={Packer} alt="Packer" className="w-[50px] h-[50px]" />
          </div>
      </div>
    </div>
  );
};

export default UnpackerNode;
