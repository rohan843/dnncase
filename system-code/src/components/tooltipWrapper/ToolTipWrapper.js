//TODO: Also add doc tooltip.

import HelpTooltip from "./HelpTooltip";

function ToolTipWrapper({ docId, helpText, customDelayMS, children, ...props }) {
  if (helpText && docId) {
  } else if (helpText && !docId) {
    return <HelpTooltip helpText={helpText} customDelayMS={customDelayMS} {...props}>
      {children}
    </HelpTooltip>;
  } else if (!helpText && docId) {
  } else {
    return <div {...props}>{children}</div>;
  }
}

export default ToolTipWrapper;
