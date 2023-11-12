import close from "../../assets/close.png";
//import { windowClosed } from "../../backendUtils/menu_handler";
function Close() {
  const handleClick = () => {
    alert("Window closed")
  };
  return (
    <div className="px-3 h-full flex items-center hover:bg-red-600" onClick={handleClick}>
      <img className="h-2/5" src={close} alt="" />
      
    </div>
  );
}

export default Close;
