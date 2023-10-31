import { useId } from "react";
import { Tooltip } from "react-tooltip";

function HelpTooltip({ children, helpText, ...props }) {
  const id = useId();
  window.test = children;
  return (
    <div {...props}>
      <a
        href="/"
        className="pointer-events-none"
        data-tooltip-id={id}
        data-tooltip-content={helpText}
      >
        {children}
      </a>
      <Tooltip id={id} />
    </div>
  );
}

export default HelpTooltip;
