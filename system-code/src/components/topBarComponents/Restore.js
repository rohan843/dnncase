import restore from "../../assets/maximize.png";
import { windowMaximize } from "../../backendUtils/menu_handler";

function Restore() {
  const handleClick = () => {
    windowMaximize();
  };
  return (
    <div className="px-3 h-full flex items-center hover:bg-stone-400" onClick={handleClick}>
      <img className="h-1/2" src={restore} alt="" />
    </div>
  );
}

export default Restore;
