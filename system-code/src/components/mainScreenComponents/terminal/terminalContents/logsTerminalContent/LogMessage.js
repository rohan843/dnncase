import MessageTimestamp from "./MessageTimestamp";
import MessageString from "./MessageString";
import classNames from "classnames";
import { logSeverities } from "../../../../../constants";

function LogMessage({ timestamp, logString, logSource, logSeverity }) {
  return (
    <div
      className={classNames(
        "w-full hover-border-black-else-dark hover-background-slightly-darker rounded h-max flex flex-row",
        {
          "text-rose-800": logSeverity === logSeverities.error,
          "text-yellow-800": logSeverity === logSeverities.warning,
        }
      )}
    >
      <MessageTimestamp timestamp={timestamp} />
      <MessageString
        logString={logString}
        logSource={logSource}
        logSeverity={logSeverity}
      />
    </div>
  );
}

export default LogMessage;
