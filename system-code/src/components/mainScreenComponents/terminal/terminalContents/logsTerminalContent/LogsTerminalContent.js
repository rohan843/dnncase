import { useSelector } from "react-redux";
import LogMessage from "./LogMessage";

function LogsTerminalContent() {
  const { logs } = useSelector((store) => store.logsTerminal);
  const displayLogElements = logs.map((logData) => (
    <LogMessage
      timestamp={logData.timestamp}
      logString={logData.logString}
      logSource={logData.logSource}
      logSeverity={logData.logSeverity}
      key={logData.id}
    />
  ));
  return <div className="flex flex-col pb-2">{displayLogElements}</div>;
}

export default LogsTerminalContent;
