import LeftSideOptions from "./LeftSideOptions";

function BottomBar() {
  return (
    <div className="w-screen bottom-bar-height border-darker background-dark flex flex-row items-center justify-between">
      <LeftSideOptions />
    </div>
  );
}

export default BottomBar;
