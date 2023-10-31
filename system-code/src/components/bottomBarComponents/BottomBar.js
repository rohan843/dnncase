import LeftSideOptions from "./LeftSideOptions";

function BottomBar() {
  return (
    <div className="w-screen h-6 border-darker background-dark fixed bottom-0">
      <LeftSideOptions />
    </div>
  );
}

export default BottomBar;
