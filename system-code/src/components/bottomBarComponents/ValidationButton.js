import OptionButton from "./OptionButton";
import errorImage from "../../assets/error.png";
import warningImage from "../../assets/warning.png";

function ValidationButton() {
  // TODO: Get these values from redux
  const noOfWarningsEverywhere = 2;
  const noOfErrorsEverywhere = 3;

  const displayedErrorCount =
    noOfErrorsEverywhere <= 9 ? noOfErrorsEverywhere.toString() : "9+";
  const displayedWarningCount =
    noOfWarningsEverywhere <= 9 ? noOfWarningsEverywhere.toString() : "9+";

  return (
    <OptionButton>
      <div className="h-full flex flex-row items-center">
        <img src={errorImage} alt="" className="h-full pr-1" />
        <span className="pr-px">{displayedErrorCount}</span>
        <img src={warningImage} alt="" className="h-full pr-px" />
        <span>{displayedWarningCount}</span>
      </div>
    </OptionButton>
  );
}

export default ValidationButton;
