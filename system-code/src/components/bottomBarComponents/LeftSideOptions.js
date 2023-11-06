import ValidationButton from "./ValidationButton";
import LogsButton from "./LogsButton";
import CommentsButton from "./CommentsButton";
import SystemTerminalButton from "./SystemTerminalButton";
import PythonShellButton from "./PythonShellButton";
import HelperButton from "./HelperButton";
import CitationsManagerButton from "./CitationsManagerButton";

function LeftSideOptions() {
  return (
    <div className="h-3/4 w-max flex flex-row px-1">
      <ValidationButton />
      <LogsButton />
      <SystemTerminalButton />
      <PythonShellButton />
      <CommentsButton />
      <HelperButton />
      <CitationsManagerButton />
    </div>
  );
}

export default LeftSideOptions;
