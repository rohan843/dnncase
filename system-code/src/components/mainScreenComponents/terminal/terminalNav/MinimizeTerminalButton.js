import terminalMinimizeImage from "../../../../assets/terminal-minimize.png";

function MinimizeTerminalButton({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="h-3 opacity-60 hover:opacity-100 cursor-pointer px-2"
    >
      <img src={terminalMinimizeImage} alt="" className="h-full" />
    </div>
  );
}

export default MinimizeTerminalButton;
