import LeftPanel from "./leftPane/LeftPanel";
import Workspace from "./workspace/Workspace";
import Terminal from "./terminal/Terminal";

function MainScreen() {
  return (
    <div className="w-screen grow flex flex-row">
      <LeftPanel />
      <div className="flex flex-col">
        <Workspace />
        <Terminal />
      </div>
    </div>
  );
}

export default MainScreen;
