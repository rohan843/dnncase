import OptionButton from "./OptionButton";
import logImage from "../../assets/log.png";

function LogsButton() {
  return (
    <OptionButton>
      <img className="h-full" src={logImage} alt="" />
    </OptionButton>
  );
}

export default LogsButton;
