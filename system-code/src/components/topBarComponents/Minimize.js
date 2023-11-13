import minimize from "../../assets/minimize-sign.png";
import { windowMinimize } from "../../backendUtils/menu_handler";
function Minimize() {
  const handleClick = () => {
    windowMinimize();
  };
  return (
    <div className="px-3 h-full flex items-center hover:bg-stone-400" onClick={handleClick}>
      <img className="h-1/3" src={minimize} alt="" />
    </div>
  );
}

export default Minimize;
