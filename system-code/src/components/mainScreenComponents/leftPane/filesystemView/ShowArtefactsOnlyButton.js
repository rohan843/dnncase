import { useState } from "react";
import artefactImage from "../../../../assets/artefact.png";
import classNames from "classnames";

function ShowArtefactsOnlyButton() {
  const [activated, setActivated] = useState(false);
  const [
    justDeactivatedButMouseStillOnElement,
    setJustDeactivatedButMouseStillOnElement,
  ] = useState(false);
  return (
    <div
      className={classNames("h-full p-2 pl-0 opacity-50 cursor-pointer", {
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
  );
}

export default ShowArtefactsOnlyButton;
