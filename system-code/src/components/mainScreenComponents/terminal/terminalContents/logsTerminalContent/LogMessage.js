import MessageTimestamp from "./MessageTimestamp";
import MessageString from "./MessageString";
import classNames from "classnames";
import { logSeverities } from "../../../../../constants";
import highlightTextImage from "../../../../../assets/highlight-text.png";
import { useState } from "react";

function LogMessage({ timestamp, logString, logSource, logSeverity }) {
  const [showHighlightButton, setShowHighlightButton] = useState(false);
  return (
    <div
      className={classNames(
        "w-full hover-border-black-else-dark hover-background-slightly-darker rounded h-max flex flex-row relative",
        {
          "text-rose-800": logSeverity === logSeverities.error,
          "text-yellow-800": logSeverity === logSeverities.warning,
        }
      )}
      onMouseEnter={() => {
        setShowHighlightButton(true);
      }}
      onMouseLeave={() => {
        setShowHighlightButton(false);
      }}
    >
      <MessageTimestamp timestamp={timestamp} />
      <MessageString
        logString={logString}
        logSource={logSource}
        logSeverity={logSeverity}
      />
      {showHighlightButton && (
        <div className="h-5 w-5 absolute right-2 z-30 opacity-20 hover:opacity-50 cursor-pointer mt-auto mb-auto top-0 bottom-0">
          <img src={highlightTextImage} alt="" />
        </div>
      )}
    </div>
  );
}

export default LogMessage;
