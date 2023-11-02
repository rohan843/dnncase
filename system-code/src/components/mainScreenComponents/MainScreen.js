import LeftBar from "./leftBar/LeftBar";
import LeftPanel from "./leftPane/LeftPanel";
import Workspace from "./workspace/Workspace";
import Terminal from "./terminal/Terminal";

function MainScreen() {
  return (
    <div className="w-screen main-screen-height flex flex-row">
      <LeftBar className="w-[1.9rem]" />
      <div style={{ width: "calc(100% - 1.9rem)" }} className="flex flex-row">
        <LeftPanel />
        <div className="flex flex-col h-full w-full relative">
          <Workspace />
          <Terminal />
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
