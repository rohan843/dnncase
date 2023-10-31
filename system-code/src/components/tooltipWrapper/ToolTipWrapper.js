//TODO: Also add doc tooltip.

import HelpTooltip from "./HelpTooltip";

function ToolTipWrapper({ docId, helpText, children, ...props }) {
  if (helpText && docId) {
  } else if (helpText && !docId) {
    <HelpTooltip helpText={helpText} {...props}>
      {children}
    </HelpTooltip>;
  } else if (!helpText && docId) {
  } else {
    return <div {...props}>{children}</div>;
  }
}

export default ToolTipWrapper;
