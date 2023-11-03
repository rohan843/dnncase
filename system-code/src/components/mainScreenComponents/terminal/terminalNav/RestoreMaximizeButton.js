import terminalMaximizeImage from "../../../../assets/terminal-maximize.png";

function RestoreMaximizeButton({ onClick }) {
  return (
    <div
      className="h-3 opacity-60 hover:opacity-100 cursor-pointer px-2"
      onClick={onClick}
    >
      <img src={terminalMaximizeImage} alt="" className="h-full" />
    </div>
  );
}

export default RestoreMaximizeButton;
