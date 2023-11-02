import refreshImage from "../../../../assets/refresh.png";

function RefreshButton() {
    return (
        <div className="h-full p-2 pl-0 opacity-50 hover:opacity-100 cursor-pointer">
          <img src={refreshImage} alt="" className="h-full" />
        </div>
      );
}

export default RefreshButton;
