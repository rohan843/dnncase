import TopBar from "./components/topBarComponents/TopBar";
import MainScreen from "./components/mainScreenComponents/MainScreen";
import BottomBar from "./components/bottomBarComponents/BottomBar";

function App() {
  return (
    <div className="h-full w-screen">
      <TopBar />
      <MainScreen />
      <BottomBar />
    </div>
  );
}

export default App;
