import Logo from "./Logo";

function TopBar() {
  return (
    <div className="w-screen h-11 background-dark border-darker flex flex-row items-center">
      <Logo />
    </div>
  );
}

export default TopBar;
