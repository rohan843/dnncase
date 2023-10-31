import OptionButton from "./OptionButton";
import commentImage from '../../assets/comment.png'

function CommentsButton() {
  return (
    <OptionButton>
      <img className="h-full" src={commentImage} alt="" />
    </OptionButton>
  );
}

export default CommentsButton;
