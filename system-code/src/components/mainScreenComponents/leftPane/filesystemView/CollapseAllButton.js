import collapseImage from "../../../../assets/collapse.png";

function CollapseAllButton() {
  return (
    <div className="h-full p-2 pl-0 opacity-50 hover:opacity-100 cursor-pointer">
      <img src={collapseImage} alt="" className="h-full" />
    </div>
  );
}

export default CollapseAllButton;
