import MinimizeTerminalButton from "./MinimizeTerminalButton";
import RestoreMaximizeButton from "./RestoreMaximizeButton";

function TerminalButtons() {
  return (
    <div className="h-full flex flex-row items-center">
      <RestoreMaximizeButton />
      <MinimizeTerminalButton />
    </div>
  );
}

export default TerminalButtons;
