import Logo from "./Logo";
import WindowButtons from "./WindowButtons";

function TopBar() {
  return (
    <div className="w-screen h-11 background-dark border-bottom-darker flex flex-row items-center justify-between">
      <Logo />
      <WindowButtons />
    </div>
  );
}

export default TopBar;
