import OptionButton from "./OptionButton";
import commentImage from "../../assets/comment.png";
import ToolTipWrapper from "../tooltipWrapper/ToolTipWrapper";

function CommentsButton() {
  return (
    <ToolTipWrapper className="h-full" helpText="Comments">
      <OptionButton>
        <img className="h-full" src={commentImage} alt="" />
      </OptionButton>
    </ToolTipWrapper>
  );
}

export default CommentsButton;
