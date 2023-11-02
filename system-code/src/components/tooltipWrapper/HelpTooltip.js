/* eslint-disable jsx-a11y/anchor-is-valid */
import { useId } from "react";
import { Tooltip } from "react-tooltip";

function HelpTooltip({ children, helpText, customDelayMS, ...props }) {
  const id = useId();
  return (
    <div {...props}>
      <a data-tooltip-id={id} data-tooltip-content={helpText}>
        {children}
      </a>
      <Tooltip id={id} delayShow={customDelayMS || 100} className="z-50" />
    </div>
  );
}

export default HelpTooltip;
