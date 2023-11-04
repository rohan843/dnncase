// This component is capable of displaying any log message string. It supports
// common escape sequences such as tabs (\t) and newlines (\n). Note that tabs
// are treated as a larger white space and any table-like tab based effects may
// not be easy to produce.

import { forwardRef } from "react";
import { logSeverities } from "../../../../../constants";

const MessageString = forwardRef(
  ({ logString, logSource, logSeverity }, ref) => {
    return (
      <div className="w-[calc(100%-11rem)] whitespace-break-spaces" ref={ref}>
        <span className="font-medium">
          {logSource}:{" "}
          {logSeverity !== logSeverities.info && (
            <span className="capitalize">{"[" + logSeverity + "] "}</span>
          )}
        </span>
        {logString}
      </div>
    );
  }
);
export default MessageString;
