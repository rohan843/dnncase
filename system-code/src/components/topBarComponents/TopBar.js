import Logo from "./Logo";
import MenuList from "./MenuList";
import WindowButtons from "./WindowButtons";

function TopBar() {
  return (
    <div className="w-screen h-11 background-dark border-bottom-darker flex flex-row items-center justify-between">
      <Logo />
      <MenuList />
      <WindowButtons />
    </div>
  );
}

export default TopBar;
