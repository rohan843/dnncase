import TopBar from "./components/topBarComponents/TopBar";
import MainScreen from "./components/mainScreenComponents/MainScreen";
import BottomBar from "./components/bottomBarComponents/BottomBar";
import ActivatableEntity from "./components/activationAndKeystrokeMonitoring/ActivatableEntity";
import { MajorEntityIDs } from "./constants";

function App() {
  return (
    <ActivatableEntity id={MajorEntityIDs.base}>
      <div className="h-full w-screen background-light">
        <TopBar />
        <MainScreen />
        <BottomBar />
      </div>
    </ActivatableEntity>
  );
}

export default App;
