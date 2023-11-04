import { logSeverities } from "../../../../../constants";
import LogMessage from "./LogMessage";

function LogsTerminalContent() {
  return (
    <div className="flex flex-col pb-2">
      <LogMessage
        timestamp="[17/09/2023 20:15]"
        logString={"A warning message from a source.\na   b  c\n12  1  2"}
        logSource="MessageSource"
        logSeverity={logSeverities.warning}
      />
    </div>
  );
}

export default LogsTerminalContent;
