import Logo from "./Logo";
import MenuList from "./MenuList";
import UserCommandEntryBox from "./UserCommandEntryBox";
import WindowButtons from "./WindowButtons";

function TopBar() {
  return (
    <div className="w-screen top-bar-height background-dark border-bottom-darker flex flex-row items-center justify-between">
      <div className="h-full grow flex flex-row items-center">
        <Logo />
        <div className="ml-2">
          <MenuList />
        </div>
        <UserCommandEntryBox />
      </div>
      <WindowButtons />
    </div>
  );
}

export default TopBar;
