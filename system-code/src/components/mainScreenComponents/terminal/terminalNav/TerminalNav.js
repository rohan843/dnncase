import TerminalSpecificControls from "./TerminalSpecificControls";
import TerminalButtons from "./TerminalButtons";

function TerminalNav() {
  return (
    <div className="w-full h-8 flex flex-row items-center justify-between mt-px px-1">
      <TerminalSpecificControls />
      <TerminalButtons />
    </div>
  );
}

export default TerminalNav;
