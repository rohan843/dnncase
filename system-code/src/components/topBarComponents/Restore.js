import restore from "../../assets/maximize.png";

function Restore() {
  return (
    <div className="px-3 h-full flex items-center hover:bg-stone-400">
      <img className="h-1/2" src={restore} alt="" />
    </div>
  );
}

export default Restore;
