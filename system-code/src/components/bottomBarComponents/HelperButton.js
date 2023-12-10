import OptionButton from "./OptionButton";
import helperImage from "../../assets/helper.png";
import ToolTipWrapper from "../tooltipWrapper/ToolTipWrapper";
import { useDispatch, useSelector } from "react-redux";
import {
  setTerminal,
  removeTerminal,
} from "../../store/slices/mainScreenSlice";
import { TerminalIDs } from "../../constants";

const id = TerminalIDs.helper;

function HelperButton() {
  const dispatch = useDispatch();

  const { terminal } = useSelector((store) => {
    return store.mainScreen;
  });

  const isActive = terminal === id;
  return (
    <ToolTipWrapper className="h-full" helpText="Helper">
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
        <img className="h-full" src={helperImage} alt="" />
      </OptionButton>
    </ToolTipWrapper>
  );
}

export default HelperButton;
