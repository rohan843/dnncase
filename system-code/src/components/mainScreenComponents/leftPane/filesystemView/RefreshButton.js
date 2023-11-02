import refreshImage from "../../../../assets/refresh.png";

function RefreshButton() {
    return (
        <div className="h-full py-2 px-1 opacity-50 hover:opacity-100 cursor-pointer">
          <img src={refreshImage} alt="" className="h-full" />
        </div>
      );
}

export default RefreshButton;
