import LeftBar from "./leftBar/LeftBar";
import LeftPanel from "./leftPane/LeftPanel";
import Workspace from "./workspace/Workspace";
import Terminal from "./terminal/Terminal";

function MainScreen() {
  return (
    <div className="w-screen grow flex flex-row">
      <LeftBar />
      {/* <LeftPanel />
      <div className="flex flex-col border-2 h-full w-full">
        <Workspace />
        <Terminal />
      </div> */}
    </div>
  );
}

export default MainScreen;
