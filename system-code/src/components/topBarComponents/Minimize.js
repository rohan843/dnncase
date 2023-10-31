import minimize from "../../assets/minimize-sign.png";

function Minimize() {
  return (
    <div className="px-3 h-full flex items-center hover:bg-stone-400">
      <img className="h-1/3" src={minimize} alt="" />
    </div>
  );
}

export default Minimize;
