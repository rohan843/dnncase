import OptionButton from "./OptionButton";
import errorImage from "../../assets/error.png";
import warningImage from "../../assets/warning.png";
import ToolTipWrapper from "../tooltipWrapper/ToolTipWrapper";
import { useDispatch, useSelector } from "react-redux";
import {
  setTerminal,
  removeTerminal,
} from "../../store/slices/mainScreenSlice";
import { TerminalIDs } from "../../constants";

const id = TerminalIDs.validation;

function ValidationButton() {
  const dispatch = useDispatch();
  const { terminal } = useSelector((store) => {
    return store.mainScreen;
  });

  const isActive = terminal === id;

  // TODO: Get these values from redux
  const noOfWarningsEverywhere = 2;
  const noOfErrorsEverywhere = 3;

  const displayedErrorCount =
    noOfErrorsEverywhere <= 9 ? noOfErrorsEverywhere.toString() : "9+";
  const displayedWarningCount =
    noOfWarningsEverywhere <= 9 ? noOfWarningsEverywhere.toString() : "9+";

  return (
    <ToolTipWrapper className="h-full" helpText="Validation">
      <OptionButton
        active={isActive}
        onClick={() => {
          if (isActive) {
            dispatch(removeTerminal());
          } else {
            dispatch(setTerminal(id));
          }
        }}
      >
        <div className="h-full flex flex-row items-center">
          <img src={errorImage} alt="" className="h-full pr-1" />
          <span className="pr-px">{displayedErrorCount}</span>
          <img src={warningImage} alt="" className="h-full pr-px" />
          <span>{displayedWarningCount}</span>
        </div>
      </OptionButton>
    </ToolTipWrapper>
  );
}

export default ValidationButton;
