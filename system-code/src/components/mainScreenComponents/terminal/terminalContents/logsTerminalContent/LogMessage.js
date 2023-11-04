import MessageTimestamp from "./MessageTimestamp";
import MessageString from "./MessageString";

function LogMessage({ timestamp, logString }) {
  return (
    <div className="w-full hover-border-black-else-dark rounded h-max flex flex-row">
      <MessageTimestamp timestamp={timestamp} />
      <MessageString logString={logString} />
    </div>
  );
}

export default LogMessage;
