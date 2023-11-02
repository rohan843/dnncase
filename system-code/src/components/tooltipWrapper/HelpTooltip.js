/* eslint-disable jsx-a11y/anchor-is-valid */
import { useId } from "react";
import { Tooltip } from "react-tooltip";
import { ToolTipDelays } from "../../constants";

function HelpTooltip({ children, helpText, customDelayMS, ...props }) {
  const id = useId();
  return (
    <div {...props}>
      <a data-tooltip-id={id} data-tooltip-content={helpText}>
        {children}
      </a>
      <Tooltip
        id={id}
        delayShow={customDelayMS || ToolTipDelays.small}
        className="z-50"
      />
    </div>
  );
}

export default HelpTooltip;
