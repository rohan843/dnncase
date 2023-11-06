import LeftSideOptions from "./LeftSideOptions";
import RightSideOptions from "./RightSideOptions";

function BottomBar() {
  return (
    <div className="w-screen bottom-bar-height border-darker background-dark flex flex-row items-center justify-between">
      <LeftSideOptions />
      <RightSideOptions />
    </div>
  );
}

export default BottomBar;
