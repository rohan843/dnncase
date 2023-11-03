import artefactImage from "../../../../assets/artefact.png";
import classNames from "classnames";
import ToolTipWrapper from "../../../tooltipWrapper/ToolTipWrapper";
import { ToolTipDelays } from "../../../../constants";
import { useDispatch, useSelector } from "react-redux";
import {
  unsetJustDeactivatedButMouseStillOnElementFlag,
  handleArtefactFilterButtonCaseA,
  handleArtefactFilterButtonCaseB,
  handleArtefactFilterButtonCaseC,
  handleArtefactFilterButtonCaseD,
} from "../../../../store";

function ShowArtefactsOnlyButton() {
  const dispatch = useDispatch();

  const {
    onlyShowArtefacts,
    artefactFilterButtonState: { justDeactivatedButMouseStillOnElementFlag },
  } = useSelector((state) => state.filesystem);

  return (
    <ToolTipWrapper
      helpText="Only Show<br />Artefacts"
      className="h-full"
      customDelayMS={ToolTipDelays.large}
    >
      <div
        className={classNames(
          "h-full py-2 px-1 cursor-pointer",
          {
            "opacity-100": onlyShowArtefacts,
            "opacity-50": !onlyShowArtefacts,
          },
          {
            "hover:opacity-100": !justDeactivatedButMouseStillOnElementFlag,
            "hover:opacity-50": justDeactivatedButMouseStillOnElementFlag,
          }
        )}
        onClick={() => {
          if (onlyShowArtefacts && justDeactivatedButMouseStillOnElementFlag) {
            // Case A
            dispatch(handleArtefactFilterButtonCaseA());
          } else if (
            !onlyShowArtefacts &&
            justDeactivatedButMouseStillOnElementFlag
          ) {
            // Case B
            dispatch(handleArtefactFilterButtonCaseB());
          } else if (
            onlyShowArtefacts &&
            !justDeactivatedButMouseStillOnElementFlag
          ) {
            // Case C
            dispatch(handleArtefactFilterButtonCaseC());
          } /*(!onlyShowArtefacts && !justDeactivatedButMouseStillOnElementFlag)*/ else {
            // Case D
            dispatch(handleArtefactFilterButtonCaseD());
          }
        }}
        onMouseLeave={() => {
          dispatch(unsetJustDeactivatedButMouseStillOnElementFlag());
        }}
      >
        <img src={artefactImage} alt="" className="h-full" />
      </div>
    </ToolTipWrapper>
  );
}

export default ShowArtefactsOnlyButton;
