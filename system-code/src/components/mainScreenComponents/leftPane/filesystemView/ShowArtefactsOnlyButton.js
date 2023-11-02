import { useState } from "react";
import artefactImage from "../../../../assets/artefact.png";
import classNames from "classnames";
import ToolTipWrapper from "../../../tooltipWrapper/ToolTipWrapper";
import { ToolTipDelays } from "../../../../constants";

function ShowArtefactsOnlyButton() {
  const [activated, setActivated] = useState(false);
  const [
    justDeactivatedButMouseStillOnElement,
    setJustDeactivatedButMouseStillOnElement,
  ] = useState(false);
  return (
    <ToolTipWrapper
      helpText="Only Show<br />Artefacts"
      className="h-full"
      customDelayMS={ToolTipDelays.large}
    >
      <div
        className={classNames(
          "h-full py-2 px-1 cursor-pointer",
          { "opacity-100": activated, "opacity-50": !activated },
          {
            "hover:opacity-100": !justDeactivatedButMouseStillOnElement,
            "hover:opacity-50": justDeactivatedButMouseStillOnElement,
          },
        )}
        onClick={() => {
          if (activated) {
            setJustDeactivatedButMouseStillOnElement(true);
          }
          if (justDeactivatedButMouseStillOnElement) {
            setJustDeactivatedButMouseStillOnElement(false);
          }
          setActivated(!activated);
        }}
        onMouseLeave={() => {
          setJustDeactivatedButMouseStillOnElement(false);
        }}
      >
        <img src={artefactImage} alt="" className="h-full" />
      </div>
    </ToolTipWrapper>
  );
}

export default ShowArtefactsOnlyButton;
