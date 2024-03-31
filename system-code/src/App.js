import TopBar from "./components/topBarComponents/TopBar";
import MainScreen from "./components/mainScreenComponents/MainScreen";
import BottomBar from "./components/bottomBarComponents/BottomBar";
import { MajorEntityIDs } from "./constants";
import useActivatableEntity from "./hooks/useActivatableEntity";
import NamedPackerNode from "./components/mainScreenComponents/workspace/fileTypeSpecificTabs/ModelCanvas/subcomponents/nodes/NamedPackerNode";

function App() {
  const handleClickCapture = useActivatableEntity(MajorEntityIDs.base);
  return <NamedPackerNode />;
  return (
    <div
      className="h-full w-screen background-light"
      onClickCapture={handleClickCapture}
    >
      <TopBar />
      <MainScreen />
      <BottomBar />
    </div>
  );
}

export default App;
