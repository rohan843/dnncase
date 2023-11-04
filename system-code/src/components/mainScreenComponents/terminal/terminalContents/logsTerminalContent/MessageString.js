// This component is capable of displaying any log message string. It supports
// common escape sequences such as tabs (\t) and newlines (\n). Note that tabs
// are treated as a larger white space and any table-like tab based effects may

import { logSeverities } from "../../../../../constants";

// not be easy to produce.
function MessageString({ logString, logSource, logSeverity }) {
  return (
    <div className="w-[calc(100%-11rem)] whitespace-break-spaces">
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
export default MessageString;
