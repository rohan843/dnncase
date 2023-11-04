import OptionButton from "./OptionButton";
import commentImage from "../../assets/comment.png";
import ToolTipWrapper from "../tooltipWrapper/ToolTipWrapper";
import { useDispatch, useSelector } from "react-redux";
import {
  setTerminal,
  removeTerminal,
} from "../../store/slices/mainScreenSlice";
import { TerminalIDs } from "../../constants";

const id = TerminalIDs.comments;

function CommentsButton() {
  const dispatch = useDispatch();

  const { terminal } = useSelector((store) => {
    return store.mainScreen;
  });

  const isActive = terminal === id;

  return (
    <ToolTipWrapper className="h-full" helpText="Comments">
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
        <img className="h-full" src={commentImage} alt="" />
      </OptionButton>
    </ToolTipWrapper>
  );
}

export default CommentsButton;
