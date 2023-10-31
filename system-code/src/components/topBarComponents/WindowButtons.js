import Minimize from "./Minimize";
import Restore from "./Restore";
import Close from "./Close";

function WindowButtons() {
  return (
    <div className="flex flex-row h-full items-center">
      <Minimize />
      <Restore />
      <Close />
    </div>
  );
}

export default WindowButtons;
