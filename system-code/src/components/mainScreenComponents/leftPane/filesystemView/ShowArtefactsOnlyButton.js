import { useState } from "react";
import artefactImage from "../../../../assets/artefact.png";
import classNames from "classnames";
import ToolTipWrapper from "../../../tooltipWrapper/ToolTipWrapper";

function ShowArtefactsOnlyButton() {
  const [activated, setActivated] = useState(false);
  const [
    justDeactivatedButMouseStillOnElement,
    setJustDeactivatedButMouseStillOnElement,
  ] = useState(false);
  return (
    <ToolTipWrapper helpText="Only Show Artefacts" className="h-full">
      <div
        className={classNames("h-full py-2 px-1 opacity-50 cursor-pointer", {
          "opacity-100": activated,
          "hover:opacity-50": justDeactivatedButMouseStillOnElement,
          "hover:opacity-100": !justDeactivatedButMouseStillOnElement,
        })}
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
