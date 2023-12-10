import LeftBar from "./leftBar/LeftBar";
import LeftPanel from "./leftPane/LeftPanel";
import Workspace from "./workspace/Workspace";
import Terminal from "./terminal/Terminal";
import classNames from "classnames";
import { useSelector } from "react-redux";

function MainScreen() {
  const { leftPane, terminal } = useSelector((state) => state.mainScreen);

  return (
    <div className="w-screen main-screen-height flex flex-row">
      <LeftBar className="w-[1.9rem]" />
      <div style={{ width: "calc(100% - 1.9rem)" }} className="flex flex-row">
        {leftPane && <LeftPanel className="w-[25%]" />}
        <div
          className={classNames("flex flex-col h-full relative", {
            "w-full": !leftPane,
            "w-[75%]": leftPane,
          })}
        >
          <Workspace />
          {terminal && <Terminal />}
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
