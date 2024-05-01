import TopBar from "./components/topBarComponents/TopBar";
import MainScreen from "./components/mainScreenComponents/MainScreen";
import BottomBar from "./components/bottomBarComponents/BottomBar";
import DataVariableIn from "./components/mainScreenComponents/workspace/fileTypeSpecificTabs/ModelCanvas/subcomponents/nodes/DataVariable.js";
import DataVariableOut from "./components/mainScreenComponents/workspace/fileTypeSpecificTabs/ModelCanvas/subcomponents/nodes/DataVariableOutput.js";
import { MajorEntityIDs } from "./constants";
import useActivatableEntity from "./hooks/useActivatableEntity";
import Input from "./components/mainScreenComponents/workspace/fileTypeSpecificTabs/ModelCanvas/subcomponents/nodes/Input.js";


function App() {
  const handleClickCapture = useActivatableEntity(MajorEntityIDs.base);
  // return(
  //   <DataVariableOut></DataVariableOut>
  // )
  return (
    <div
      className="h-full w-screen background-light"
      onClickCapture={handleClickCapture}
    >
      <TopBar />
      <MainScreen />
      <BottomBar />
      {/* <DataVariableOut content="hp_units"></DataVariableOut> */}

    </div>
  );
}

export default App;
