import InputNode from "../InputNode";
import ConvLSTM2Dlayer from "./convLSTM2Dlayer";
import OutputNode from "../OutputNode";

function ModelCanvas() {
  // return <div className="h-full w-full">
  //   asdf
  //   </div>;
  return <>
    <ConvLSTM2Dlayer/>
    <div style={{height:"50px"}}></div>
    <InputNode/>
    <div style={{height:"50px"}}></div>
    <OutputNode/>
  </>
}

export default ModelCanvas;
