import LeftSideOptions from "./LeftSideOptions";

function BottomBar() {
  return (
    <div className="w-screen h-8 border-darker background-dark fixed bottom-0 flex flex-row items-center">
      <LeftSideOptions />
    </div>
  );
}

export default BottomBar;
