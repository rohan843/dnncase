import collapseImage from "../../../../assets/collapse.png";

function CollapseAllButton() {
  return (
    <div className="h-full py-2 px-1 opacity-50 hover:opacity-100 cursor-pointer">
      <img src={collapseImage} alt="" className="h-full" />
    </div>
  );
}

export default CollapseAllButton;
