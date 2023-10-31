import close from "../../assets/close.png";

function Close() {
  return (
    <div className="px-3 h-full flex items-center hover:bg-red-600">
      <img className="h-2/5" src={close} alt="" />
    </div>
  );
}

export default Close;
