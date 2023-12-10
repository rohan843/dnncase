import OptionButton from "./OptionButton";
import citationsManagerImage from "../../assets/citations.png";
import ToolTipWrapper from "../tooltipWrapper/ToolTipWrapper";
import { useDispatch, useSelector } from "react-redux";
import {
  setTerminal,
  removeTerminal,
} from "../../store/slices/mainScreenSlice";
import { TerminalIDs } from "../../constants";

const id = TerminalIDs.citations;

function CitationsManagerButton() {
  const dispatch = useDispatch();

  const { terminal } = useSelector((store) => {
    return store.mainScreen;
  });

  const isActive = terminal === id;
  return (
    <ToolTipWrapper className="h-full" helpText="Citations<br />Manager">
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
        <img className="h-full" src={citationsManagerImage} alt="" />
      </OptionButton>
    </ToolTipWrapper>
  );
}

export default CitationsManagerButton;
