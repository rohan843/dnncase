import { useId } from "react";
import { Tooltip } from "react-tooltip";

function HelpTooltip({ children, helpText, ...props }) {
  const id = useId();
  return (
    <div {...props}>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        data-tooltip-id={id}
        data-tooltip-content={helpText}
      >
        {children}
      </a>
      <Tooltip id={id} delayShow={100}/>
    </div>
  );
}

export default HelpTooltip;
